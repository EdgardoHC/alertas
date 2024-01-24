$(document).ready(function () {
    $("#btnEliminar").click(function () {
        Swal.fire({
            title: "¿Confirma que desea eliminar?",
            showDenyButton: true,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Sí",
            denyButtonText: `No`
        }).then((result) => {           
            if (result.isConfirmed) {
                Swal.fire("Eliminado", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Accion cancelada", "", "info");
            }
        });
    });
});

