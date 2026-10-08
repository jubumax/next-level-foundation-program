// [3-10]

let movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "Titanic", year: 1997, rating: 7.9, genre: "Romance" },
  { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi" },
  { title: "Avatar", year: 2009, rating: 7.8, genre: "Sci-Fi" },
  { title: "Notebook", year: 2004, rating: 7.8, genre: "Romance" },
];

// ১. শুধু Sci-Fi Movie, Rating অনুযায়ী বড় থেকে ছোট সাজানো

let topSciFi = movies
  ?.filter((m) => m.genre === "Sci-Fi")
  ?.sort((a, b) => b.rating - a.rating)
  ?.map((m) => `${m.title} -> ${m.rating}`)
  ?.forEach((m) => console.log(`Dekhbo ki dekhbo na >> ${m}`));


// task

/*
let products = [
  { id: 1, title: "Mouse", price: 500, category: "Accessories", inStock: true },
  { id: 2, title: "Keyboard", price: 1200, category: "Accessories", inStock: false },
  { id: 3, title: "Monitor", price: 8000, category: "Display", inStock: true },
  { id: 4, title: "Laptop", price: 55000, category: "Computer", inStock: true },
  { id: 5, title: "Headphone", price: 1500, category: "Accessories", inStock: true }
];
শুধু In-Stock Product, Price অনুযায়ী কম থেকে বেশি সাজানো, শুধু Title+Price বের করা, টোটাল কত টাকা লাগবে স্টক আউট করতে চাইলে সেটা ক্যালকুলেট করুন।
*/