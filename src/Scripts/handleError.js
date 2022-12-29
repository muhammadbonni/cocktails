import Swal from "sweetalert2";

const handleError = (err) => {
  Swal.fire({
    icon: "error",
    title: err,
    confirmButtonText: "Ok",
    confirmButtonColor: "#7a89fe",
  });
};
export default handleError;
