const laravel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA/CAYAAAC4nXvhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAa0SURBVHgB7VtNduJGEC5JHICcIHCCwOB98DqbwcmsR5zA5gSIExifwHid+OFZZG0OMNjcAOYGPgBIqWpVi5aQhFpq/l7me2/GkizaXf/VVYUFGvjW6dz6AB5eLmCz6fcWixVcKKwiL/3danVrjjPEy27iVxNkwOgSGZBL+LTVaoDj3OPlZ/EgCFZgWQP818LrIb+2wutJ7+1tBBeEVMKR4DrY9i0SeIe3dSTsA+8fet+/e8o7jcBxPFzgKz9a+UEw+vPtbQIXgB3Cnz99cm3LImk26D4AeLA2Gw/V+SNtAWRAC5kyRSY1+NELqv/g3NU/IjzFjmdIzAilPCuy0BQZhj+GCgPO2v4ttmMi2BVP2I578/kLaEKsVau5qv0fUv3JJNcArS+LxQw0YU07nSWwWpOEYb0eZ6m1xoZiTpGJ98AglNBax30vcN89He2qgSSaEARffdteAalpSbBjJIfXlc/QZ/wKhsAm+ejLfZPjRakjo5coxMLmZUdXpOK4GG7ycXp19S6kpglyjLQBlIAHJAlKdAyB9oOEvSLRrxASvcC/c41h9BehqSHo77+ivxnuWy8iHBdoIvF9wYAgkBx8LMIAkgJtipgGIcEz5HwbVfwBKoI0SBBCDCUtIgmHPqgtHa8Is5tNEyPQExBTkPFkws+hw4VcwsUC6IQEAxIcxAXuMjZFUnhkKXTZMV7jpq5R3SpLm+xY0aDQB/l+EwkdJ98l9b6Zz11ieEx7USBpwiPnFogPzudWkqisBCUrwUk6Rs4JSAsmuH4fCiI1tGqeDfaF10zCYcuAZIIy4Q2J+7wER5dwjgaPIAkmydl2v2gukbrebnh9QOGNa/s+zCrbVDjo8q9EgnNTclNpwIji2lspL9Ds2lABLF2yd6JhCqH63//bbk/3Eh4tEqr4AiXyjrcrsmM4LFrkoKokQGySJO0dH2WDHiolNkUhvHPF8Ko4xpBocozhmgK6hB8FAW6wbHjl0LrEBIc8vwytTfVkSThLwiWywmtagpKZ4IShdZV8v7CNnxIkLSRsEoXXMEFxyf5t33/h0OqJl8PQOkqL9SrOWuIqshIUNcGh0JqV4CRxERJXEQuvGJpga8f9G40E52IknkQvDHEiLV5TwUSz4HGxhFfFT8L/b/hJ+KlBeTWGp9/oGn/+XqYClAfK6DAK1OX9WRCuVFg+86MuF0BcqAjO6Kac0VHtYPXH+/uPk8ZxWTiEbcFTHHUxV3cpQ+MKynADMPhLs9ydWSzZbERycxLCdwoOu82LGWoBXYsKioMf0amgPofJTbwb5Psexv7odHlUwqPzsTwq5uTVnKBMYgUQx3Hx3sO09CmNAVndoLRiydFsPPV8XCCvFgzw/WuuoILIyxP2XwuC+k7REz8qTmYZFaJjSdz1t9fahUN+10WN8WSHhmt5ElPxv2LH+7pBByNc2DE5lyAA3lSlwiGBGdBLHFAkSDNGqCGrImsZJ1zxpp4gWtrxfL73qFgEHI+p5L0lGis1Pc26nFHCY408SPemZSEYGqq5Kx6EzQu6aqzDfp8WjBAuvakfbwAMbgx0U3LjseOIkjGUQCXCU2dkKtqxin86HVqX1m/wo5gdoyeHsihNuEgzkzMy87kHBlB1OqMIyhLeUOtcB7VjgFHvABMV1WwcvemNgU3l2XHV6YwsaGVuIo5ua9yURQ2LNOHzIOyY2lLbYQKyY+p9e4cimqCdspZpwqdBDhM43MyD0I6pAXCUUdFSqq6kkGPZQuYe1+2+IZxj2nEeKtn4Tgs5ZwjnFHacByMJTHSEvLqiNPUWwh6XPEI+bBynCznx+BSIbNxEjYvtv504Qi5PZcd5IMJDNTNU41J6XE0IOx11bvX2887HOhCOEXvmsDtGXhi2IiE5JbTkVLESiAHRuJdlzXpm4v22FUw9c56y+lKCmbXIQ1eocR0amWPkFVJkdcBvwlMIAw4xYkoRVeredI1bB8lpSaUV7EEF7CQwSPw4VuMKgjtT9q+DrGlJ9B93JsKf3lczAFZrrJcVHZMuM+CXOkZu8KgrkZuykn3jhnvREA46QHIsRWdcdaDMrJK3dnlmdcR5+wwMo1CuHhvCUe0fNyocT0UkDyqqHZ/H6Ywcym6N+72s/WcdVEzZcR4Kfe8sDWyLtOEWP1qh84mNVmXZeEbhsNTXQcqidCeF7b+t2v++IbzE7Hncjo9INKG0xJPgA4osSnzg9Rirrj+kxDEaPCU6oydNkIwRTkiZcZcge5VO0HjhsAyMEi6RMuMuvzQzOHbBIQsHIVyCe1yUY38z8bUuk/gPaIe08TVwwSEAAAAASUVORK5CYII=";
export {
  laravel as default
};
//# sourceMappingURL=technology-larval.png.mjs.map
