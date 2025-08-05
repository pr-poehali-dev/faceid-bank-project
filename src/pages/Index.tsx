import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['restaurants', 'transport']);
  const [showQR, setShowQR] = useState(false);

  const handleFaceIDAuth = () => {
    setIsAuthenticated(true);
  };

  const cashbackCategories = [
    { id: 'restaurants', name: 'Рестораны', icon: 'UtensilsCrossed', rate: '5%' },
    { id: 'transport', name: 'Транспорт', icon: 'Car', rate: '3%' },
    { id: 'shopping', name: 'Покупки', icon: 'ShoppingBag', rate: '2%' },
    { id: 'travel', name: 'Путешествия', icon: 'Plane', rate: '4%' },
    { id: 'fuel', name: 'Заправки', icon: 'Fuel', rate: '3%' },
    { id: 'supermarket', name: 'Супермаркеты', icon: 'ShoppingCart', rate: '2%' },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bank-green-50 to-bank-green-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md card-shadow">
          <CardHeader className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 gradient-green rounded-full flex items-center justify-center">
              <Icon name="Landmark" size={40} className="text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-premium-dark">ПремиумБанк</CardTitle>
            <CardDescription>Войдите с помощью Face ID</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div 
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-bank-green-600 flex items-center justify-center cursor-pointer hover-scale animate-pulse-green"
                onClick={handleFaceIDAuth}
              >
                <Icon name="ScanFace" size={48} className="text-bank-green-600" />
              </div>
              <p className="text-sm text-muted-foreground">Нажмите для сканирования лица</p>
            </div>
            <Button 
              onClick={handleFaceIDAuth}
              className="w-full gradient-green hover:opacity-90 transition-opacity"
              size="lg"
            >
              <Icon name="ScanFace" size={20} className="mr-2" />
              Войти с Face ID
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bank-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center">
                <Icon name="Landmark" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-premium-dark">ПремиумБанк</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-bank-green-100 text-bank-green-800">Premium</Badge>
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Balance & Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Wallet" size={24} className="text-bank-green-600" />
                <span>Баланс</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-premium-dark mb-2">2 458 670 ₽</div>
              <div className="text-sm text-muted-foreground mb-4">Основной счёт</div>
              <div className="flex space-x-2">
                <Button size="sm" className="gradient-green">
                  <Icon name="ArrowUpRight" size={16} className="mr-1" />
                  Перевод
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowQR(!showQR)}>
                  <Icon name="QrCode" size={16} className="mr-1" />
                  QR-код
                </Button>
              </div>
              {showQR && (
                <div className="mt-4 p-4 bg-white rounded-lg border-2 border-dashed border-bank-green-300 text-center">
                  <div className="w-32 h-32 mx-auto mb-2 bg-bank-green-900 rounded-lg flex items-center justify-center">
                    <Icon name="QrCode" size={80} className="text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground">QR-код для оплаты</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={24} className="text-bank-green-600" />
                <span>Кешбек</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-premium-dark mb-2">12 450 ₽</div>
              <div className="text-sm text-muted-foreground mb-4">За этот месяц</div>
              <Progress value={75} className="mb-2" />
              <div className="text-xs text-muted-foreground">75% до следующего уровня</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="cards" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="cards">Карты</TabsTrigger>
            <TabsTrigger value="cashback">Кешбек</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
          </TabsList>

          {/* Cards Tab */}
          <TabsContent value="cards" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Debit Card */}
              <Card className="card-shadow hover-scale">
                <CardContent className="p-6">
                  <div className="gradient-green rounded-xl p-6 text-white mb-4 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <Icon name="CreditCard" size={32} className="opacity-30" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm opacity-80">Дебетовая карта</p>
                          <p className="font-semibold">Premium Debit</p>
                        </div>
                        <div className="w-8 h-6 bg-white/20 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm opacity-80">**** **** **** 3847</p>
                        <p className="text-xs opacity-60">Действительна до 12/28</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Активна</Badge>
                    <Button variant="outline" size="sm">
                      <Icon name="Settings" size={16} className="mr-1" />
                      Настроить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Credit Card */}
              <Card className="card-shadow hover-scale">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white mb-4 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <Icon name="CreditCard" size={32} className="opacity-30" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm opacity-80">Кредитная карта</p>
                          <p className="font-semibold">Premium Credit</p>
                        </div>
                        <div className="w-8 h-6 bg-white/20 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm opacity-80">**** **** **** 7291</p>
                        <p className="text-xs opacity-60">Лимит: 500 000 ₽</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">15% использовано</Badge>
                    <Button variant="outline" size="sm">
                      <Icon name="Settings" size={16} className="mr-1" />
                      Настроить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order New Card */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Plus" size={24} className="text-bank-green-600" />
                  <span>Заказать новую карту</span>
                </CardTitle>
                <CardDescription>
                  Выберите тип карты для оформления
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" size="lg" className="h-20 flex-col space-y-2">
                    <Icon name="CreditCard" size={24} className="text-bank-green-600" />
                    <span>Дебетовая карта</span>
                  </Button>
                  <Button variant="outline" size="lg" className="h-20 flex-col space-y-2">
                    <Icon name="CreditCard" size={24} className="text-blue-600" />
                    <span>Кредитная карта</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cashback Tab */}
          <TabsContent value="cashback" className="space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Настройка кешбека</CardTitle>
                <CardDescription>
                  Выберите 3 категории для повышенного кешбека
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {cashbackCategories.map((category) => (
                    <div
                      key={category.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover-scale ${
                        selectedCategories.includes(category.id)
                          ? 'border-bank-green-500 bg-bank-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => {
                        if (selectedCategories.includes(category.id)) {
                          setSelectedCategories(prev => prev.filter(id => id !== category.id));
                        } else if (selectedCategories.length < 3) {
                          setSelectedCategories(prev => [...prev, category.id]);
                        }
                      }}
                    >
                      <div className="text-center space-y-2">
                        <Icon name={category.icon as any} size={32} className="mx-auto text-bank-green-600" />
                        <div>
                          <p className="font-medium text-sm">{category.name}</p>
                          <p className="text-xs text-muted-foreground">{category.rate} кешбек</p>
                        </div>
                        {selectedCategories.includes(category.id) && (
                          <Badge variant="secondary" className="bg-bank-green-100 text-bank-green-800 text-xs">
                            Выбрано
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Выбрано {selectedCategories.length} из 3 категорий
                  </p>
                  <Button className="gradient-green" disabled={selectedCategories.length !== 3}>
                    Сохранить настройки
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Premium Tab */}
          <TabsContent value="premium" className="space-y-6">
            <Card className="card-shadow gradient-green text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Crown" size={24} />
                  <span>Premium статус</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Эксклюзивные привилегии для VIP-клиентов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <Icon name="Plane" size={32} className="mb-2" />
                    <h3 className="font-semibold mb-1">Бизнес-залы</h3>
                    <p className="text-sm text-white/80">Доступ в 1200+ бизнес-залах аэропортов мира</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <Icon name="Shield" size={32} className="mb-2" />
                    <h3 className="font-semibold mb-1">Страхование</h3>
                    <p className="text-sm text-white/80">Расширенная страховка путешествий</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <Icon name="Phone" size={32} className="mb-2" />
                    <h3 className="font-semibold mb-1">Консьерж</h3>
                    <p className="text-sm text-white/80">Персональный помощник 24/7</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <Icon name="Percent" size={32} className="mb-2" />
                    <h3 className="font-semibold mb-1">Кешбек до 10%</h3>
                    <p className="text-sm text-white/80">Повышенный кешбек в премиум категориях</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Личная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Анна Смирнова</h3>
                      <p className="text-sm text-muted-foreground">Premium клиент с 2020</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email</span>
                      <span className="text-sm">anna.smirnova@email.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Телефон</span>
                      <span className="text-sm">+7 (999) 123-45-67</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Статус</span>
                      <Badge className="bg-bank-green-100 text-bank-green-800">Premium</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="ScanFace" size={20} className="text-bank-green-600" />
                      <span className="text-sm">Face ID</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Активен</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="Fingerprint" size={20} className="text-bank-green-600" />
                      <span className="text-sm">Touch ID</span>
                    </div>
                    <Badge variant="secondary">Не настроен</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="Smartphone" size={20} className="text-bank-green-600" />
                      <span className="text-sm">Push-уведомления</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Включены</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настроить безопасность
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;