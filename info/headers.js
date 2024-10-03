const headers = {
  accept: "*/*",
  "accept-language": "en-US,en;q=0.9,sq;q=0.8",
  "content-type": "application/json",
  cookie:
    "surfshark-uuid=80791f47-f26e-447c-b967-41ca043af56a; surfshark-experiments=test16:a|test258:a|test288:b; surfshark-locale=en; _gcl_au=1.1.749326594.1727217134; _fbp=fb.1.1727217136246.524105958318802945; _hjSessionUser_1489227=eyJpZCI6IjYzNmNmZGQ4LTdmM2QtNWY3MC1iMzFlLWEyMTcxY2U2MDhlNiIsImNyZWF0ZWQiOjE3MjcyMTcxMzQ2NTgsImV4aXN0aW5nIjp0cnVlfQ==; _uetvid=da1e97e07ac411efbd3ba12631e17f73; _sp_id.8641=d440c3f6-132d-4d0a-b1ba-08a0f97df17d.1727217134.2.1727638139.1727218623.33143130-5407-4a2b-9f9f-1a9e0fb802bc.c00c0c1f-bf5f-4c9b-8c4d-966e8d29a0a5.b69ff0c2-a676-4a3e-b1b6-40f5b6d645e3.1727637824625.38; surfshark-consent-state=a:0|m:0; __cf_bm=0Rn6yfrIGOVd__XBW.i1sUCQQw_S4_.M1aEqngCOGyA-1727965220-1.0.1.1-Xi_pGuDZcJURUH9URmt5J629zcESB1qhYaLZ4lUafvAUG97gn_Gg4FLb7YRv6uQ2ApwcsacbOaavwGJammQ_nA; _cfuvid=x9lMP2DqwudbztFkTOCC50dje4dNBRiynsrVf.fOvqQ-1727965220134-0.0.1.1-604800000; __cflb=0H28ux8JvnTEfjEb2V4LQt5btFkNytGjeasQgpdb5Kr; surfshark-cf-uuid=237ca768-c935-46f4-b16a-7f743fb889e9; surfshark-ref-checkout-path=/?frequency=24&slug=one; surfshark-aff-stack=; cf_clearance=GmdbSkga5oLdkaAvsFemX8bFxM4Ej7gzHOmpQ1iVd6A-1727965343-1.2.1.1-6pDeYG_GklOzpz_ZtH0ZdBD6K68F0hbT8zGUwZF_BSyDGkLIUyPAtIMiHACMZ21tUmq9v.y3GVGFHizq4HjE5PxccNxDumKM7fUoPuje7P8KC1bjOHTooKVR9dpuFClMbKMtFqJY80umqwdh3Eg5Ta2nAm8ObMEav36WdtpGzfLCcTzq2Ej752q1A7pOxPj6Qpjt4zC6_u1dV9qwrIWKRAP85ss5z8ZKrWrrXXnGBiz9IdcBBWaXmbJdWQnrE6pWmcIHHE4e4leu.6GxDETayt3vreZ3vNu0B2BHJ7iZaUJEe6QrQmj3OfvKB4njQqnM1fAcDKEyM1t4v55dM1NuJZuzci863k7bAlABAmhPsjBdqhY_lNJRcRU95f__Be59; __cf_bm=f1GiQDdE6b0SF_V_Pz1PWBGiMJ2PsIgygqSAwURyfJY-1727965357-1.0.1.1-u6zMWFV_h0cFhl1BVDiX5h1xgTKYcblHJ.jR3GJ_VzBgOCCCNSqK281kdl7QNdWONT7RDeH8d_a3b5J3bpUU2A",
  origin: "https://order.surfshark.com",
  priority: "u=1, i",
  referer: "https://order.surfshark.com/?frequency=24&slug=one",
  "sec-ch-ua":
    '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
  "sec-ch-ua-arch": '"x86"',
  "sec-ch-ua-bitness": '"64"',
  "sec-ch-ua-full-version": '"129.0.6668.89"',
  "sec-ch-ua-full-version-list":
    '"Google Chrome";v="129.0.6668.89", "Not=A?Brand";v="8.0.0.0", "Chromium";v="129.0.6668.89"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-model": '""',
  "sec-ch-ua-platform": '"Windows"',
  "sec-ch-ua-platform-version": '"15.0.0"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "ss-lang": "en",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
};

const headers1 = { 
    'accept': '*/*', 
    'accept-language': 'en-US,en;q=0.9,sq;q=0.8', 
    'content-type': 'application/json', 
    'cookie': 'surfshark-uuid=80791f47-f26e-447c-b967-41ca043af56a; surfshark-experiments=test16:a|test258:a|test288:b; surfshark-locale=en; _gcl_au=1.1.749326594.1727217134; _fbp=fb.1.1727217136246.524105958318802945; _hjSessionUser_1489227=eyJpZCI6IjYzNmNmZGQ4LTdmM2QtNWY3MC1iMzFlLWEyMTcxY2U2MDhlNiIsImNyZWF0ZWQiOjE3MjcyMTcxMzQ2NTgsImV4aXN0aW5nIjp0cnVlfQ==; _uetvid=da1e97e07ac411efbd3ba12631e17f73; _sp_id.8641=d440c3f6-132d-4d0a-b1ba-08a0f97df17d.1727217134.2.1727638139.1727218623.33143130-5407-4a2b-9f9f-1a9e0fb802bc.c00c0c1f-bf5f-4c9b-8c4d-966e8d29a0a5.b69ff0c2-a676-4a3e-b1b6-40f5b6d645e3.1727637824625.38; surfshark-consent-state=a:0|m:0; __cf_bm=0Rn6yfrIGOVd__XBW.i1sUCQQw_S4_.M1aEqngCOGyA-1727965220-1.0.1.1-Xi_pGuDZcJURUH9URmt5J629zcESB1qhYaLZ4lUafvAUG97gn_Gg4FLb7YRv6uQ2ApwcsacbOaavwGJammQ_nA; _cfuvid=x9lMP2DqwudbztFkTOCC50dje4dNBRiynsrVf.fOvqQ-1727965220134-0.0.1.1-604800000; surfshark-cf-uuid=237ca768-c935-46f4-b16a-7f743fb889e9; surfshark-ref-checkout-path=/?frequency=24&slug=one; surfshark-aff-stack=; __cflb=0H28ux8JvnTEfjEb2V4LQt5btFkNytHkiJE2jXUgmnU; cf_clearance=7DyIqU.XXDTVEEfcebIQHcLIQWtL4S.2FJbBVVjevt4-1727965430-1.2.1.1-im8JEVFaagdYO4Uadc9E8Qr4HF2HPrp2Yth_1UuOZULBnunG7LZv1K9a7RiA25lRctpeDwOs3R0gA1D2Wd1yCJ_AMQDBLrk5lALPItrJDxJkgUScVMxtWq.sGGCxd1RNsqQcBVhcuCPMdMxLMU4PCoOTgO2SSCGXbLTZSbtZibwC8fvh2JGlwtYfLB7M9K4UPmw0pKmAhPqUrcIB_dQ7FAeqBD9GdJkjFtvMhNA0Ks2Cs_HiAA7FE1eo_wsMtudRsCQ09CqeqDnnT8iEZ8HDFTjnqtHIzWOojGs2Xgv9svJvpc1gl1C37ymZsmTxSL7DWbUmZjRYVq3Pdrx5RwWXjYOewytWMN85aL0B_JSGtizMO93PmPUZ9Dp6F6ZR.HDx; __cf_bm=oSkPdoicAzI2a797etyxaKZB5yADSdHoZr7buOmhlK8-1727965531-1.0.1.1-hkg6FEmFC0GqOOm4n7H02YOV1VsG6.wqkQBog649dkFtp73osj0zCfiexkj8kdy7fTYNvMlY5vzUI.iVa5.V.Olpcoyxo7GxEJJNZB1V5WQ; _cfuvid=1wz6HyQTKu.zDzZck.nmzZmHm2iOAhj9tVqDa0iOfuc-1727965531980-0.0.1.1-604800000; __cf_bm=2KgjU6DBi5fzEopgX2cSdzXPdMRktZLmPzSEDDXRpv0-1727978752-1.0.1.1-XoPymd8zQXwtn0aHghIUbP4yqI8PpABY2_p5PWnWGEMpS4cynN4bFXabgO6oJ98A3HEi30HoAFK7j0kL.GWwnwRB8PKPlS7n5KB70uF2i6I; _cfuvid=7lNvVINUeOjg3N3h5MBIqkZs77imGQlJh1kXhofjZhw-1727978752819-0.0.1.1-604800000', 
    'origin': 'https://my.surfshark.com', 
    'priority': 'u=1, i', 
    'referer': 'https://my.surfshark.com/auth/reset', 
    'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-origin', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
  };

module.exports = headers;
module.exports = headers1;