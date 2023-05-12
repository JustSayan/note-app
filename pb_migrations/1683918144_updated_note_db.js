migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ksa4myjic8vspcw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m6wvhjvq",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ksa4myjic8vspcw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m6wvhjvq",
    "name": "note",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
