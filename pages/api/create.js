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

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.query; // Extract the product ID from the query parameters
        console.log('Deleting product with ID:', id);
        if (!id) {
            return res.status(400).json({ error: 'Product ID is required.' });
        }


        try {
            // Forward the DELETE request to the external API
            const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                return res.status(response.status).json({ error: 'Failed to delete product.' });
            }

            const data = await response.json();


            return res.status(200).json({ message: 'Product deleted successfully.', data });
        } catch (error) {
            console.error('Error deleting product:', error);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    } else {
        // Handle unsupported HTTP methods
        res.setHeader('Allow', ['DELETE']);
        return res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }
}