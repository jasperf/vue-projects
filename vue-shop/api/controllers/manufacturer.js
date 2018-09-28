// ./controllers/manufacturer.js
import Model from '../model';

const {Product, Manufacturer} = Model;

const manufacturerController = {
    all (req, res) {
      // Returns all manufacturers
        Manufacturer.find({})
            .exec((err, manufacturers) => res.json(manufacturers))
    }
};

export default manufacturerController;
