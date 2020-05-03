$(() => {
    function loadPeople() {
        $("#people-table tbody tr").remove();
        $.get('/Home/GetAllPeople',
            ppl => {
                ppl.forEach(p => {
                    $("#people-table tbody").append(`
                        <tr>
                         <td>${p.firstName}</td>
                         <td>${p.lastName}</td>
                         <td>${p.age}</td>
                        </tr>`);
                });
            });
    }
});