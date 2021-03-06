"use strict";
// Generated by CoffeeScript 1.10.0
(function() {
  let base;
  (base = process.env).NODE_ENV || (base.NODE_ENV = "development");

  const ES_HOST = process.env.ES_HOST || "fixture-elasticsearch";
  const ES_PORT = process.env.ES_PORT || "9200";
  const ES_INDEX = process.env.ES_INDEX || "test-index";
  const ES_TYPE = process.env.ES_TYPE || "test";
  const ES_API_VERSION = process.env.ES_API_VERSION || "2.2";

  module.exports = {
    test: {
      host: `${ES_HOST}:${ES_PORT}`,
      indexName: ES_INDEX,
      typeName: ES_TYPE,
      apiVersion: ES_API_VERSION
    },
    development: {
      host: `${ES_HOST}:${ES_PORT}`,
      indexName: ES_INDEX,
      typeName: ES_TYPE,
      apiVersion: ES_API_VERSION
    },
    production: {
      host: `${ES_HOST}:${ES_PORT}`,
      indexName: ES_INDEX,
      typeName: ES_TYPE,
      apiVersion: ES_API_VERSION
    }
  };

}).call(this);
