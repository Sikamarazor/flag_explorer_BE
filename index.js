import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import countryRoutes from './routes/countryRoutes.js';

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();

const swaggerDocument = YAML.load('./swagger.yaml');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', countryRoutes);

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

// Handle uncaught exceptions
process.on('uncaughtException', function(error) {
  console.error('processId ' + process.pid);
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger docs at http://localhost:${port}/api-docs`);
  });
