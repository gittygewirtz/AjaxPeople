$(() => {

    loadPeople();

    $("#add-person").on('click', () => {
        $.post("/Home/AddPerson", { firstName: $("#first-name").val(), lastName: $("#last-name").val(), age: $("#age").val() }, ppl => {
            loadPeople();
        })
    });

    $("tbody").on('click', '.edit-btn', function () {
        $("#modal-id").val(`${$(this).data('id')}`);
        $("#modal-first-name").val(`${$(this).data('firstname')}`);
        $("#modal-last-name").val(`${$(this).data('lastname')}`);
        $("#modal-age").val(`${$(this).data('age')}`);
        $("#edit-modal").modal();        
    });

    $("#save-btn").on('click', () => {
        $.post("/Home/EditPerson", { id: $("#modal-id").val(), firstName: $("#modal-first-name").val(), lastName: $("#modal-last-name").val(), age: $("#modal-age").val() }, person => {
            loadPeople();
        });
        $("#edit-modal").modal('hide');
    });

    $("tbody").on('click', '.delete-btn', function () {
        const id = $(this).data('id');
        $.post(`/Home/DeletePerson?id=${id}`, id => {
            loadPeople();
        })
    });

    function loadPeople() {
        clearTextboxes();
        $("#people-table tbody tr").remove();
        $.get('/Home/GetAllPeople',
            ppl => {
                ppl.forEach(p => {
                    $("#people-table tbody").append(
                        `<tr>
                         <td>${p.firstName}</td>
                         <td>${p.lastName}</td>
                         <td>${p.age}</td>
                         <td>
                            <button class="edit-btn btn btn-info" data-id="${p.id}" data-firstname="${p.firstName}" data-lastname="${p.lastName}" data-age="${p.age}">Edit</button>
                            <button class="delete-btn btn btn-danger" data-id="${p.id}">Delete</button>
                        </td>
                        </tr>`);
                });
            });
    }

    function clearTextboxes() {
        $("#first-name").val('');
        $("#last-name").val('');
        $("#age").val('');
    }
});