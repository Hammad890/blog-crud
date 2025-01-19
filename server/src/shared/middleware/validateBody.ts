import { Request, Response, NextFunction } from 'express';
import { ZodSchema} from 'zod';

const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (result.success) {
      next(); // Proceed if validation passes
    } else {
      const errorMessages = result.error.errors.map((err) => err.message);
      res.status(400).json({ error: errorMessages }); // Send detailed error messages
    }
  };
};

export default validateBody;

