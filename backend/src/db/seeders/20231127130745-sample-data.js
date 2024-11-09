const db = require('../models');
const Users = db.users;

const MenuItems = db.menu_items;

const OrderItems = db.order_items;

const Orders = db.orders;

const Shops = db.shops;

const Shop = db.shop;

const MenuItemsData = [
  {
    name: 'Grilled Chicken Salad',

    unit_price: 12.99,

    calories: 350,

    protein: 30,

    fats: 10,

    carbohydrates: 20,

    // type code here for "relation_one" field
  },

  {
    name: 'Quinoa Bowl',

    unit_price: 10.5,

    calories: 400,

    protein: 15,

    fats: 8,

    carbohydrates: 50,

    // type code here for "relation_one" field
  },

  {
    name: 'Avocado Toast',

    unit_price: 8.75,

    calories: 250,

    protein: 5,

    fats: 15,

    carbohydrates: 30,

    // type code here for "relation_one" field
  },

  {
    name: 'Vegan Burger',

    unit_price: 11,

    calories: 450,

    protein: 20,

    fats: 20,

    carbohydrates: 40,

    // type code here for "relation_one" field
  },

  {
    name: 'Smoothie Bowl',

    unit_price: 9.25,

    calories: 300,

    protein: 10,

    fats: 5,

    carbohydrates: 60,

    // type code here for "relation_one" field
  },
];

const OrderItemsData = [
  {
    quantity: 2,

    total_price: 25.98,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    quantity: 1,

    total_price: 10.5,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    quantity: 3,

    total_price: 26.25,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    quantity: 1,

    total_price: 11,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    quantity: 2,

    total_price: 18.5,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const OrdersData = [
  {
    order_date: new Date('2023-10-01T10:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_date: new Date('2023-10-02T12:30:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_date: new Date('2023-10-03T14:45:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_date: new Date('2023-10-04T09:15:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_date: new Date('2023-10-05T16:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ShopsData = [
  {
    name: 'Healthy Bites',

    address: '123 Green St, Springfield',

    // type code here for "relation_one" field
  },

  {
    name: 'Fresh Eats',

    address: '456 Blue Ave, Metropolis',

    // type code here for "relation_one" field
  },

  {
    name: 'Nutri Delights',

    address: '789 Yellow Rd, Gotham',

    // type code here for "relation_one" field
  },

  {
    name: 'Vegan Vibes',

    address: '101 Orange Blvd, Star City',

    // type code here for "relation_one" field
  },

  {
    name: 'Organic Oasis',

    address: '202 Purple Ln, Central City',

    // type code here for "relation_one" field
  },
];

const ShopData = [
  {
    name: 'Wilhelm Wundt',
  },

  {
    name: 'Emil Fischer',
  },

  {
    name: 'Enrico Fermi',
  },

  {
    name: 'Rudolf Virchow',
  },

  {
    name: 'Paul Ehrlich',
  },
];

// Similar logic for "relation_many"

async function associateUserWithShop() {
  const relatedShop0 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setShop) {
    await User0.setShop(relatedShop0);
  }

  const relatedShop1 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setShop) {
    await User1.setShop(relatedShop1);
  }

  const relatedShop2 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setShop) {
    await User2.setShop(relatedShop2);
  }

  const relatedShop3 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setShop) {
    await User3.setShop(relatedShop3);
  }

  const relatedShop4 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const User4 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (User4?.setShop) {
    await User4.setShop(relatedShop4);
  }
}

async function associateMenuItemWithShop() {
  const relatedShop0 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const MenuItem0 = await MenuItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (MenuItem0?.setShop) {
    await MenuItem0.setShop(relatedShop0);
  }

  const relatedShop1 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const MenuItem1 = await MenuItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (MenuItem1?.setShop) {
    await MenuItem1.setShop(relatedShop1);
  }

  const relatedShop2 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const MenuItem2 = await MenuItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (MenuItem2?.setShop) {
    await MenuItem2.setShop(relatedShop2);
  }

  const relatedShop3 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const MenuItem3 = await MenuItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (MenuItem3?.setShop) {
    await MenuItem3.setShop(relatedShop3);
  }

  const relatedShop4 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const MenuItem4 = await MenuItems.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (MenuItem4?.setShop) {
    await MenuItem4.setShop(relatedShop4);
  }
}

async function associateOrderItemWithOrder() {
  const relatedOrder0 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const OrderItem0 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (OrderItem0?.setOrder) {
    await OrderItem0.setOrder(relatedOrder0);
  }

  const relatedOrder1 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const OrderItem1 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (OrderItem1?.setOrder) {
    await OrderItem1.setOrder(relatedOrder1);
  }

  const relatedOrder2 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const OrderItem2 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (OrderItem2?.setOrder) {
    await OrderItem2.setOrder(relatedOrder2);
  }

  const relatedOrder3 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const OrderItem3 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (OrderItem3?.setOrder) {
    await OrderItem3.setOrder(relatedOrder3);
  }

  const relatedOrder4 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const OrderItem4 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (OrderItem4?.setOrder) {
    await OrderItem4.setOrder(relatedOrder4);
  }
}

async function associateOrderItemWithMenu_item() {
  const relatedMenu_item0 = await MenuItems.findOne({
    offset: Math.floor(Math.random() * (await MenuItems.count())),
  });
  const OrderItem0 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (OrderItem0?.setMenu_item) {
    await OrderItem0.setMenu_item(relatedMenu_item0);
  }

  const relatedMenu_item1 = await MenuItems.findOne({
    offset: Math.floor(Math.random() * (await MenuItems.count())),
  });
  const OrderItem1 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (OrderItem1?.setMenu_item) {
    await OrderItem1.setMenu_item(relatedMenu_item1);
  }

  const relatedMenu_item2 = await MenuItems.findOne({
    offset: Math.floor(Math.random() * (await MenuItems.count())),
  });
  const OrderItem2 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (OrderItem2?.setMenu_item) {
    await OrderItem2.setMenu_item(relatedMenu_item2);
  }

  const relatedMenu_item3 = await MenuItems.findOne({
    offset: Math.floor(Math.random() * (await MenuItems.count())),
  });
  const OrderItem3 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (OrderItem3?.setMenu_item) {
    await OrderItem3.setMenu_item(relatedMenu_item3);
  }

  const relatedMenu_item4 = await MenuItems.findOne({
    offset: Math.floor(Math.random() * (await MenuItems.count())),
  });
  const OrderItem4 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (OrderItem4?.setMenu_item) {
    await OrderItem4.setMenu_item(relatedMenu_item4);
  }
}

async function associateOrderItemWithShop() {
  const relatedShop0 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const OrderItem0 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (OrderItem0?.setShop) {
    await OrderItem0.setShop(relatedShop0);
  }

  const relatedShop1 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const OrderItem1 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (OrderItem1?.setShop) {
    await OrderItem1.setShop(relatedShop1);
  }

  const relatedShop2 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const OrderItem2 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (OrderItem2?.setShop) {
    await OrderItem2.setShop(relatedShop2);
  }

  const relatedShop3 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const OrderItem3 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (OrderItem3?.setShop) {
    await OrderItem3.setShop(relatedShop3);
  }

  const relatedShop4 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const OrderItem4 = await OrderItems.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (OrderItem4?.setShop) {
    await OrderItem4.setShop(relatedShop4);
  }
}

async function associateOrderWithCustomer() {
  const relatedCustomer0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setCustomer) {
    await Order0.setCustomer(relatedCustomer0);
  }

  const relatedCustomer1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setCustomer) {
    await Order1.setCustomer(relatedCustomer1);
  }

  const relatedCustomer2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setCustomer) {
    await Order2.setCustomer(relatedCustomer2);
  }

  const relatedCustomer3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setCustomer) {
    await Order3.setCustomer(relatedCustomer3);
  }

  const relatedCustomer4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order4 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Order4?.setCustomer) {
    await Order4.setCustomer(relatedCustomer4);
  }
}

async function associateOrderWithReceptionist() {
  const relatedReceptionist0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setReceptionist) {
    await Order0.setReceptionist(relatedReceptionist0);
  }

  const relatedReceptionist1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setReceptionist) {
    await Order1.setReceptionist(relatedReceptionist1);
  }

  const relatedReceptionist2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setReceptionist) {
    await Order2.setReceptionist(relatedReceptionist2);
  }

  const relatedReceptionist3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setReceptionist) {
    await Order3.setReceptionist(relatedReceptionist3);
  }

  const relatedReceptionist4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order4 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Order4?.setReceptionist) {
    await Order4.setReceptionist(relatedReceptionist4);
  }
}

async function associateOrderWithShop() {
  const relatedShop0 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setShop) {
    await Order0.setShop(relatedShop0);
  }

  const relatedShop1 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setShop) {
    await Order1.setShop(relatedShop1);
  }

  const relatedShop2 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setShop) {
    await Order2.setShop(relatedShop2);
  }

  const relatedShop3 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setShop) {
    await Order3.setShop(relatedShop3);
  }

  const relatedShop4 = await Shops.findOne({
    offset: Math.floor(Math.random() * (await Shops.count())),
  });
  const Order4 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Order4?.setShop) {
    await Order4.setShop(relatedShop4);
  }
}

async function associateShopWithShop() {
  const relatedShop0 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const Shop0 = await Shops.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Shop0?.setShop) {
    await Shop0.setShop(relatedShop0);
  }

  const relatedShop1 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const Shop1 = await Shops.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Shop1?.setShop) {
    await Shop1.setShop(relatedShop1);
  }

  const relatedShop2 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const Shop2 = await Shops.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Shop2?.setShop) {
    await Shop2.setShop(relatedShop2);
  }

  const relatedShop3 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const Shop3 = await Shops.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Shop3?.setShop) {
    await Shop3.setShop(relatedShop3);
  }

  const relatedShop4 = await Shop.findOne({
    offset: Math.floor(Math.random() * (await Shop.count())),
  });
  const Shop4 = await Shops.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Shop4?.setShop) {
    await Shop4.setShop(relatedShop4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await MenuItems.bulkCreate(MenuItemsData);

    await OrderItems.bulkCreate(OrderItemsData);

    await Orders.bulkCreate(OrdersData);

    await Shops.bulkCreate(ShopsData);

    await Shop.bulkCreate(ShopData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithShop(),

      await associateMenuItemWithShop(),

      await associateOrderItemWithOrder(),

      await associateOrderItemWithMenu_item(),

      await associateOrderItemWithShop(),

      await associateOrderWithCustomer(),

      await associateOrderWithReceptionist(),

      await associateOrderWithShop(),

      await associateShopWithShop(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('menu_items', null, {});

    await queryInterface.bulkDelete('order_items', null, {});

    await queryInterface.bulkDelete('orders', null, {});

    await queryInterface.bulkDelete('shops', null, {});

    await queryInterface.bulkDelete('shop', null, {});
  },
};
