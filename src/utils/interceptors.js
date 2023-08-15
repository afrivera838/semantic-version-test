import { errorMessage } from '../constants/messages';
import Swal from 'sweetalert2';
import { setNotPermissions } from './SetNotPermissions/SetNotPermissions';
import { messageMethods } from '../constants/messageMethods';

export const interceptorOK = response => {
  const {
    data: { data: responseData },
  } = response;
  if (response.status === 201) {
    //Swal.fire('Successfully', customMessage(responseData), 'success');
  } else if (response.data.errors?.length) {
    Swal.fire({
      text: response.data.errors[0],
      confirmButtonText: 'Ok',
    });
  }
  return {
    ...response,
    setSuccessMessage: () => Swal.fire(...messageMethods[response.config.method]),
  };
};

export const interceptorError = async err => {
  const { pathname } = window.location;
  try {
    if (pathname !== '/login' && err.response.status === 401) {
      setNotPermissions();
      return err;
    }

    if (
      pathname !== '/login' &&
      err.response.status === 422 &&
      err.response.data.status === 'error'
    ) {
      return err;
    }

    Swal.fire({ text: err.response.data.errors[0] });
  } catch (error) {
    const errorResponse =
      typeof err?.response?.data?.error !== 'string' ? err?.response?.data?.error[0] : errorMessage;
    Swal.fire({ text: errorResponse });
    if (err?.response?.status === 401) {
      setNotPermissions();
    }
    return false;
  }

  return err;
};
