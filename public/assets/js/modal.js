let createModal = (title, message, btnControls) => {
  let mod = `<div class="modal mapModal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">${title}</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">${message}</div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>`;
  $("body").append(mod);
  $("#exampleModal").modal("show");
  $("#exampleModal").on("hidden.bs.modal", function() {
    $(this).remove();
  });
};
