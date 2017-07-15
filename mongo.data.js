db.createCollection.drop()
db.createCollection("users");
db.users.insert({"userId":1, "name":'Chandru'});
db.users.insert({"userId":2, "name":'Harish'});

db.images.drop()
db.createCollection("images");
db.images.insert({
  "userId": 1,
  "filenames": ["img1.jpeg", "img2.jpeg", "img3.jpeg"]
});
db.images.insert({
  "userId": 2,
  "filenames": ["abcd.jpeg", "efgh.jpeg", "hijk.jpeg"]
});

db.templates.drop()
db.createCollection("templates");
db.templates.insert({"templateId":1, "name":'default'})
db.templates.insert({"templateId":2, "name":'first'})

db.user_templates.drop()
db.createCollection("user_templates");

db.user_templates.insert({"userId":1, "name":'Chandru111'});
db.user_templates.insert({"userId":2, "name":'Harish222'});

db.user_templates.insert({"userId":1, "templateId":1, "filenames":["img1.jpeg"]});
db.user_templates.insert({"userId":1, "templateId":2, "filenames":["img1.jpeg", "img3.jpeg"]});

db.user_templates.insert({"userId":2, "templateId":2, "filenames":["abcd.jpeg", "efgh.jpeg", "hijk.jpeg"]});
