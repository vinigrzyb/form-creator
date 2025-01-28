import express from "express";
import forms from './formRoutes.js'

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("teste"));

  app.use(express.json(), forms);
};

export default routes;