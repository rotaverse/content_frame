require("dotenv").config();
const productData = require("./data/products");
import users from './data/users.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
const connectDB = require("./config/db");
const Product = require("./models/Product");

dotenv.config()

connectDB();

const importData = async () => {
  try {
    // await Product.deleteMany({});
    await Order.deleteMany()
    await User.deleteMany()

    // await Product.insertMany(productData);
    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    // const sampleProducts = products.map((product) => {
    //  return { ...product, user: adminUser }
    // })

    // await Product.insertMany(sampleProducts)

    console.log('Data Successfully Imported!'.green.inverse)

    process.exit();
  } catch (error) {
    // console.error("Error with data import", error);
    console.error(`${error}`.red.inverse)
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
