const bookSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "isbn": { "type": "string" },
      "title": { "type": "string" },
      "subTitle": { "type": "string" },
      "author": { "type": "string" },
      "publish_date": { 
        "type": "string", 
        "format": "date-time" 
      },
      "publisher": { "type": "string" },
      "pages": { 
        "type": "integer",
        "minimum": 1
      },
      "description": { "type": "string" },
      "website": { 
        "type": "string", 
        "format": "uri" 
      }
    },
    "required": [
      "isbn", "title", "author", "publish_date", 
      "publisher", "pages", "description"
    ],
    "additionalProperties": false
  },
}

module.exports = { bookSchema }