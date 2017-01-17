define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Вход в систему",
    "group": "____________",
    "description": "<p>Вход в систему по паре логин и пароль.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Здесь надо передать почтовый ящик.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Здесь надо передать пароль.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"OK\",\n  \"token\": \"gdfg546546gfhgfhfgh456546546\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 503 Bad Request\n{\n  \"code\": \"PassNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/authrouter.js",
    "groupTitle": "____________",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Регистрация нового пользователя",
    "group": "____________",
    "description": "<p>Для регистрации нового пользователя.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Здесь надо передать почтовый ящик.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Здесь надо передать пароль.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"OK\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 503 Bad request\n{\n  \"code\": \"passWrongRegExp\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/authrouter.js",
    "groupTitle": "____________",
    "name": "PostRegister"
  }
] });
