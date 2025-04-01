export default async function handler(req, res) {
  if (req.method === 'POST') {
      const { title, price, description, image, category } = req.body;

      // Validate the request body
      if (!title || !price || !description || !image || !category) {
          return res.status(400).json({ error: 'All fields are required.' });
      }

      try {
          // Forward the request to the external API
          const response = await fetch('https://fakestoreapi.com/products', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ title, price, description, image, category }),
          });

          const data = await response.json();

          // Return the response to the frontend
          return res.status(200).json(data);
      } catch (error) {
          console.error('Error adding product:', error);
          return res.status(500).json({ error: 'Failed to add product.' });
      }
  } else {
      // Handle unsupported methods
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}

