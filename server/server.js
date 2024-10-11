import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
// import { connectionString } from "pg/lib/defaults"; -- this line adds itself - be careful!

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: "my root route" });
});

//write a READ endpoint
app.get("/reviews", async (req, res) => {
  try {
    //write a SQL query to get the biscuit name and description from the db
    const reviewsData = await db.query(`SELECT * FROM reviews`);
    console.log(reviewsData);
    res.status(200).json(reviewsData.rows);
  } catch (error) {
    console.error("This is a fatal error! How dramatic!", error);
    res.status(500).json({ success: false });
  }
});

//write a CREATE endpoint

app.post("/add-reviews", (req, res) => {
  try {
    //the body --> this is the new data I am adding to the db
    const {
      guest_name,
      check_in_date,
      check_out_date,
      travelled_from,
      message_to_host,
      favourite_moments,
      recommendations,
      rating,
    } = req.body;

    const newReview = db.query(
      `INSERT INTO biscuits (guest_name, check_in_date, check_out_date, travelled_from, message_to_host, favourite_moments, recommendations, rating)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
        `,
      [
        guest_name,
        check_in_date,
        check_out_date,
        travelled_from,
        message_to_host,
        favourite_moments,
        recommendations,
        rating,
      ]
      //you use $1 parameters to keep the data secure
    );
    res.status(200).json(newReview.rows);
  } catch (error) {
    console.error(
      "This is a fatal error! How dramatic! You cannot add new review",
      error
    );
    res.status(500).json({ success: false });
  }
});

//write a READ endpoint with a JOIN SQL query
//as a user, I want to see a list of biscuits and flavours

// app.get("/biscuits-flavours", async (req, res) => {
//   try {
//     const biscuitsData = await db.query(
//       `SELECT biscuits.biscuit_name, flavours.flavour_name FROM biscuits
//         JOIN biscuits_flavours ON biscuits_flavours.biscuit_id = biscuits.id
//         JOIN flavours ON flavours.id = biscuits_flavours.flavour_id`
//     );
//     console.log(biscuitsData);
//     res.status(200).json(biscuitsData.rows);
//   } catch (error) {
//     console.error("This is a fatal error! How dramatic!", error);
//     res.status(500).json({ success: false });
//   }
// });

// //write an UPDATE endpoint
// app.put("/update-biscuit/:id", (req, res) => {
//   //we need to make sure we target the specific row of data we want to update
//   //in the db, we have the id column
//   //in the server, I can use params
//   //the params will match the id value in the db
//   //to represent dymanic params, we use :

//   try {
//     const { id } = req.params;
//     const { biscuit_name, src, description, crunchiness } = req.body;

//     const updateBiscuit = db.query(
//       `UPDATE biscuits SET biscuit_name = $1, src = $2, description = $3, crunchiness = $4 WHERE id = $5 RETURNING *`,
//       [biscuit_name, src, description, crunchiness, id]
//     );
//     res.status(200).json(updateBiscuit.rows);
//   } catch (error) {
//     console.error(
//       "This is a fatal error! How dramatic! You cannot update biscuits",
//       error
//     );
//     res.status(500).json({ success: false });
//   }
// });

// //write a DELETE endpoint
// // the delete endpoint is EXACTLY the same as the update, with a DELETE sql query instead
// app.delete("/delete-biscuit/:id", async (req, res) => {
//   //we need to make sure we target the specific row of data we want to delete
//   // in the db, we have the id column
//   //in the server, I can use params
//   //the params will match the id value in the db
//   //to represent dynamic params, we use : in the endpoint

//   try {
//     const { id } = req.params;
//     // params {
//     //     id: 1
//     // }

//     const deleteBiscuit = await db.query(
//       `DELETE FROM biscuits WHERE id = $1 RETURNING *`,
//       [id]
//     );
//     res.status(200).json(deleteBiscuit.rows);
//   } catch (error) {
//     console.error(
//       "This is a fatal error! How dramatic! You cannot delete this biscuit",
//       error
//     );
//     res.status(500).json({ success: false });
//   }
// });
