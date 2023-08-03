import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer zCwIeuQP0RPb-7f_8dDM5Y-Ue_kwQ2ytOB2_y0Qab8WB48b0aAcd3bB7bUZNq4LJWciYkTuC-9SKpI5nozv5uNgSsa-DRE6fE9jaAx8ucRhjBpxQ48Zt7wj_xAfKZHYx",
  },
});
