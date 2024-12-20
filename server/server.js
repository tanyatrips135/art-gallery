const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(express.json());
app.use(cors());

const mongoURI = "mongodb://localhost:27017/art-gallery";
const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// GET all artists
app.get("/api/artists", async (req, res) => {
  try {
    const database = client.db("art-gallery");
    const artistsCollection = database.collection("artist-data");
    const artists = await artistsCollection.find().toArray();
    res.json(artists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch artists" });
  }
});

// GET artist by ID
app.get("/api/artists/:id", async (req, res) => {
  try {
    const database = client.db("art-gallery");
    const artistsCollection = database.collection("artist-data");

    const artist = await artistsCollection.findOne({
      _id: new ObjectId(req.params.id),
    });
    if (!artist) {
      return res.status(404).json({ error: "Artist not found" });
    }

    res.json(artist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch artist" });
  }
});

// GET paintings for a specific category
app.get("/api/categories/:category/paintings", async (req, res) => {
  try {
    const { category } = req.params;
    const database = client.db("art-gallery");
    const categoriesCollection = database.collection("paintings");

    const categoryData = await categoriesCollection.findOne({
      artist: category,
    });
    if (!categoryData) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(categoryData.paintings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch paintings" });
  }
});

// GET all events
app.get("/api/events", async (req, res) => {
  try {
    const database = client.db("art-gallery");
    const eventsCollection = database.collection("events");
    const events = await eventsCollection.find().toArray();
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// POST application form data
app.post("/api/applications", async (req, res) => {
  try {
    const database = client.db("art-gallery");
    const applicationsCollection = database.collection("applications");

    // Get the form data from the request body
    const formData = req.body;

    // Insert the form data into the "applications" collection
    const result = await applicationsCollection.insertOne(formData);

    res
      .status(201)
      .json({
        message: "Application submitted successfully",
        id: result.insertedId,
      });
  } catch (err) {
    console.error("Error submitting application:", err);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

// Shopping Cart APIs

// GET all items in the cart
app.get("/api/cart", async (req, res) => {
  try {
    const database = client.db("art-gallery");
    const cartCollection = database.collection("cart");
    const cartItems = await cartCollection.find().toArray();
    res.json(cartItems);
  } catch (err) {
    console.error("Error fetching cart items:", err);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

// ADD an item to the cart
app.post("/api/cart", async (req, res) => {
  try {
    const database = client.db("art-gallery");
    const cartCollection = database.collection("cart");

    const item = req.body; // Expects an object with artwork details
    const result = await cartCollection.insertOne(item);
    res.status(201).json({ message: "Item added to cart", id: result.insertedId });
  } catch (err) {
    console.error("Error adding item to cart:", err);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

// REMOVE an item from the cart
app.delete("/api/cart/:id", async (req, res) => {
  try {
    const database = client.db("art-gallery");
    const cartCollection = database.collection("cart");

    const result = await cartCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    console.error("Error removing item from cart:", err);
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});