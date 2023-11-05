/* eslint-disable prefer-const */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
export const decodeMessBillto = (mess: any) => {
  return {
    BilltoId: mess.split("~/`")[0],
    CustomerNumber: mess.split("~/`")[1].split("~!`")[0],
    CustomerName: mess.split("~/`")[1].split("~!`")[1].split("~#`")[0],
    Address: mess
      .split("~/`")[1]
      .split("~!`")[1]
      .split("~#`")[1]
      .split("~(`~)`")[0],
    City: mess
      .split("~/`")[1]
      .split("~!`")[1]
      .split("~#`")[1]
      .split("~(`~)`")[1]
      .split("~[`")[0],
    PostalCode: mess
      .split("~/`")[1]
      .split("~!`")[1]
      .split("~#`")[1]
      .split("~(`~)`")[1]
      .split("~[`")[1]
      .split("~$`")[0],
    AccountActivated: mess
      .split("~/`")[1]
      .split("~!`")[1]
      .split("~#`")[1]
      .split("~(`~)`")[1]
      .split("~[`")[1]
      .split("~$`")[1]
      .split("~]`")[0],
    DeptEmos: mess
      .split("~/`")[1]
      .split("~!`")[1]
      .split("~#`")[1]
      .split("~(`~)`")[1]
      .split("~[`")[1]
      .split("~$`")[1]
      .split("~]`")[1]
      .split("~<`")[0],
    SalesChannelCode: mess
      .split("~/`")[1]
      .split("~!`")[1]
      .split("~#`")[1]
      .split("~(`~)`")[1]
      .split("~[`")[1]
      .split("~$`")[1]
      .split("~]`")[1]
      .split("~<`")[1]
      .split("~>`")[0],
    LangActivated: mess
      .split("~/`")[1]
      .split("~!`")[1]
      .split("~#`")[1]
      .split("~(`~)`")[1]
      .split("~[`")[1]
      .split("~$`")[1]
      .split("~]`")[1]
      .split("~<`")[1]
      .split("~>`")[1]
      .split("~*`")[0],
    Id: mess
      .split("~/`")[1]
      .split("~!`")[1]
      .split("~#`")[1]
      .split("~(`~)`")[1]
      .split("~[`")[1]
      .split("~$`")[1]
      .split("~]`")[1]
      .split("~<`")[1]
      .split("~>`")[1]
      .split("~*`")[1]
      .split("~%`")[0],
  };
};

export const decodeMessBilltoV2 = (mess: any) => {
  const handleDecode = (messed: any, ship = false) => {
    if (messed) {
      if (!ship) {
        return {
          BilltoId: messed.split("~/`")[0],
          CustomerNumber: messed.split("~/`")[1].split("~!`")[0],
          CustomerName: messed.split("~/`")[1].split("~!`")[1].split("~#`")[0],
          Address: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[0],
          City: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[0],
          PostalCode: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[0],
          AccountActivated: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[0],
          DeptEmos: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[1]
            .split("~<`")[0],
          SalesChannelCode: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[1]
            .split("~<`")[1]
            .split("~>`")[0],
          LangActivated: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[1]
            .split("~<`")[1]
            .split("~>`")[1]
            .split("~*`")[0],
          Id: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[1]
            .split("~<`")[1]
            .split("~>`")[1]
            .split("~*`")[1]
            .split("~%`")[0],
        };
      } else {
        return {
          ShippingNumber: messed.split("~/`")[0],
          CustomerNumber: messed.split("~/`")[1].split("~!`")[0],
          CustomerName: messed.split("~/`")[1].split("~!`")[1].split("~#`")[0],
          Address: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[0],
          City: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[0],
          PostalCode: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[0],
          AccountActivated: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[0],
          DeptEmos: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[1]
            .split("~<`")[0],
          SalesChannelCode: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[1]
            .split("~<`")[1]
            .split("~>`")[0],
          LangActivated: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[1]
            .split("~<`")[1]
            .split("~>`")[1]
            .split("~*`")[0],
          Id: messed
            .split("~/`")[1]
            .split("~!`")[1]
            .split("~#`")[1]
            .split("~(`~)`")[1]
            .split("~[`")[1]
            .split("~$`")[1]
            .split("~]`")[1]
            .split("~<`")[1]
            .split("~>`")[1]
            .split("~*`")[1]
            .split("~%`")[0],
        };
      }
    }
  };
  const shipBills = {
    billing: null,
    shipping: [],
  };
  const arr = mess.split("SHIP_TO~W`");
  const updatedArr = arr.filter((a) => a);

  updatedArr.forEach((a) => {
    if (a) {
      if (a.includes("BILL_TO~W`")) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const arr = a.split("BILL_TO~W`");
        const billString = arr[0];
        const shipsString = arr[1];
        const billing = handleDecode(billString);
        const shipping = handleDecode(shipsString, true);
        shipBills.billing = billing;
        shipBills.shipping.push(shipping);
      } else {
        const shipping = handleDecode(a, true);
        shipBills.shipping.push(shipping);
      }
    }
  });
  return shipBills;
};

export const getBrowserInfo = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const browserName = navigator ? detectBrowserName() : "";
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const os = navigator ? getOS() : "";
  let device;
  if (os.toLowerCase() === "android" || os.toLowerCase() === "ios") {
    device = "mobile";
  } else {
    device = "pc";
  }

  return { browserName, os, device };

  function detectBrowserName() {
    if (
      (navigator.userAgent.indexOf("Opera") ||
        navigator.userAgent.indexOf("OPR")) != -1
    ) {
      return "Opera";
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      return "Chrome";
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      return "Safari";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      return "Firefox";
    } else if (
      navigator.userAgent.indexOf("MSIE") != -1 ||
      !!document.documentMode == true
    ) {
      //IF IE > 10
      return "IE";
    } else {
      return "unknown";
    }
  }
  function getOS() {
    // eslint-disable-next-line prefer-const
    let userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"],
      // eslint-disable-next-line @typescript-eslint/no-shadow
      os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
    }

    return os;
  }
};

export const trimText = (string, limit) => {
  if (string.length > limit) {
    return string.slice(0, limit) + "...";
  }
  return string;
};

export const formatToReadableNumber = (number) => {
  return parseInt(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const subdistImgUrl = (kodesubdist) => {
  return `https://firebasestorage.googleapis.com/v0/b/digital-business-b2214.appspot.com/o/Foto_Subdist%2F${kodesubdist}.png?alt=media`;
};

export function padDigits(number, digits) {
  return (
    Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
  );
}

export const categoryMasterImgUrl = (kodemaster) => {
  return `https://emosservice3.enseval.com/redeempoint/Assets/icon_kategori/${kodemaster}.png`;
};

export const productImgUrl = (kodeproduk, kodesubdist) => {
  return `https://www.emos.id/apicontent/product/${kodesubdist}/${kodeproduk}.jpg`;
};

export const handleRefreshPage = () => window.location.reload();

export const onErrorImg = `this.src='https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png'`;

export const readableDate = (dateVal) => {
  const date = new Date(dateVal);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const day = date
    .getDate()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  return `${day}-${month}-${year}`;
};

export const dateFormatYearMonthDate = (date) => {};

export const downloadFile = (url, filename) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};

export const uploadFile = (firebase, folder, filename, file) => {
  return new Promise((resolve, reject) => {
    const uploadTask = firebase.storage.ref(`${folder}/${filename}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      () => {
        firebase.storage
          .ref(folder)
          .child(filename)
          .getDownloadURL()
          .then((url) => {
            resolve(url);
          })
          .catch((err) => {
            reject(err);
          });
      }
    );
  });
};

// import CryptoJS from "crypto-js";

// export const hashMD5 = (string) => {
//   return CryptoJS.MD5(string).toString();
// };

export const encode64 = (input) => {
  return input ? btoa(input) : "";
};

export const decode64 = (input) => {
  return input ? atob(input) : "";
};

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
