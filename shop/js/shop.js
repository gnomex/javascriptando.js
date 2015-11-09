var options = {
  valueNames: [ 'id', 'name', 'model', 'quantity', 'year' ]
};

// Init list
var shoesList = new List('shoes', options);

var idField = $('#id-field'),
    nameField = $('#name-field'),
    modelField = $('#model-field'),
    quantityField = $('#quantity-field'),
    yearField = $('#year-field'),
    addBtn = $('#add-btn'),
    editBtn = $('#edit-btn').hide(),
    removeBtns = $('.remove-item-btn'),
    editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
refreshCallbacks();

addBtn.click(function() {
  shoesList.add({
    id: Math.floor(Math.random()*110000),
    name: nameField.val(),
    model: modelField.val(),
    quantity: quantityField.val(),
    year: yearField.val()
  });
  clearFields();
  refreshCallbacks();
});

editBtn.click(function() {
  var item = shoesList.get('id', idField.val())[0];
  item.values({
    id:idField.val(),
    name: nameField.val(),
    model: modelField.val(),
    quantity: quantityField.val(),
    year: yearField.val()
  });
  clearFields();
  editBtn.hide();
  addBtn.show();
});

function refreshCallbacks() {
  // Needed to add new buttons to jQuery-extended object
  removeBtns = $(removeBtns.selector);
  editBtns = $(editBtns.selector);

  removeBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    shoesList.remove('id', itemId);
  });

  editBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    var itemValues = shoesList.get('id', itemId)[0].values();
    idField.val(itemValues.id);
    nameField.val(itemValues.name);
    modelField.val(itemValues.model);
    quantityField.val(itemValues.quantity);
    yearField.val(itemValues.year);

    editBtn.show();
    addBtn.hide();
  });
}

function clearFields() {
  nameField.val('');
  modelField.val('');
  quantityField.val('');
  yearField.val('');
}
