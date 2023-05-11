migrate((db) => {
  const collection = new Collection({
    "id": "ksa4myjic8vspcw",
    "created": "2023-05-11 02:32:36.969Z",
    "updated": "2023-05-11 02:32:36.969Z",
    "name": "note_db",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hxtg5rb4",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "m6wvhjvq",
        "name": "notes",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ksa4myjic8vspcw");

  return dao.deleteCollection(collection);
})
