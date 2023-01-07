const axios = require('axios')
const request = require('request')


request({
    url: "https://chat.openai.com/backend-api/conversation?__cf_chl_rt_tk=INEXZjWiqMi_oDwzsR_0r.Ir3pjKo0TOw5sZlJNytoA-1670816096-0-gaNycGzNDj0#",
    "headers": {
        "accept": "text/event-stream",
        "accept-language": "zh-CN,zh;q=0.9",
        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJhanRnYWp0Zzc1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiVVMifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLXZHeUFPMnBsSDlQRHFrZnpHdk8zTkpnZSJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTgwMDE3MTM5NjcxMjQ0NDUwMjEiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NzA4MTM3MzcsImV4cCI6MTY3MDg1NjkzNywiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.ZXRtJob_vVCi9rt6hw9raICBU5W3C1DaHQfydqcNUDnwla-iDuWLBWQ54y45IrB_G8-qqRv43-0L0yDX8WCNDgveP0s9QIRA0yXMmgINr9QhS54zxDE3rMlB-P9j3ahRO44FNPMVWmxCtyfzpY-PmVf1PZc4XFTUyskALL6dwMnbWJzbHMr117vtWsNvWs3_Lp-UeB1eagdwldftSUDguCqvuxZHfCbacFZj-Wb7jT8NtOjOKw1h40SBx-izZwWn_YcfgJELBiJjmTCCgp1MNKlfE42CkXj6_aKGR7XuKAGc7C9U1vmbaILxOBoC50WHjbqBv_hib4-wZS5skoVqxw",
        "content-type": "application/json",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-openai-assistant-app-id": "",
        "referrer": "https://chat.openai.com/chat",
        "origin": "https://chat.openai.com"
    },
    body: JSON.stringify({
        "action": "next",
        "messages": [{
            "id": "33ca0fb5-265d-4b0c-a926-34c93b50fc05",
            "role": "user",
            "content": {
                "content_type": "text",
                "parts": ["你好"]
            }
        }],
        "parent_message_id": "1e9a1e9e-2792-48ef-b1bb-1fe5e2b86f1c",
        "model": "text-davinci-002-render"
    }),
    // "body": "{\"action\":\"next\",\"messages\":[{\"id\":\"5b3550c9-9644-4299-a5e7-e96e9438723d\",\"role\":\"user\",\"content\":{\"content_type\":\"text\",\"parts\":[\"用element-ui写一个登录页面\"]}}],\"parent_message_id\":\"b0b05550-c7bb-4819-bf0b-ab73e6eeb3c0\",\"model\":\"text-davinci-002-render\"}",
    "method": "POST"
}, function (error, response, body) {
    if (error) console.log(error);
    console.log(body)
})

// .then(res => {
//     console.log(res.data);
// })