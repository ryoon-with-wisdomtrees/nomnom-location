# [쩝쩝location](https://ryoon-with-nomnom-googlemap.vercel.app/)

(Next.js 13 with Google map api and Google place api)

![logo](https://ryoon-with-nomnom-googlemap.vercel.app/nom_logo.png)

![screenshot](https://ryoon-with-nomnom-googlemap.vercel.app/screenshot.png)

## 제작과정

- 기술스택 - Next.js 13, Typescript, Google Map, Google Places API, React, Tailwind CSS, and NextAuth.js.
- 제작기간 - 3일

이 짭짭Location(location based Next.js13 웹앱)은 자바스크립트로 제작된 [Build Location-Based NextJs13 App : Google Place Api, Google Map, React, Tailwind Css, NextAuth](https://youtu.be/SGsDxZukodQ)유튜브강의를 참고하여 TypeScript로 작성한 웹앱입니다.

Mapping library에 대한 사용 경험을 얻고 싶어서 제작한 웹앱이었고, 만드는 과정이 생각보다 꽤 즐거워서 제작 내내 즐거웠던 기억이 납니다.

## 커스텀해서 사용하고 싶으시다면?

저는 제가 좋아하는 마라탕, 족발, 타코등등...사이드프로젝트 제작시에 끌렸던 것들로 푸드 카테고리를 잡아놨는데 취향껏 다른 걸로 바꾸시면 되겠습니다 껄껄.

Search기능은 구조만 잡아두고 아직 구현안했는데요. [textSearch(신규)](https://developers.google.com/maps/documentation/places/web-service/text-search?hl=ko)로 작업할 예정입니다. 이 방법 말고도 다른 다양한 방법이 있으니 취향껏 제작해주시면 될 것 같아요

그 외에 반드시 제반되야 하는 필수 사항은 아래와 같습니다.

- .env파일을 작성후 아래의 variable에 대한 값을 지정해주시면 되며, 저의 경우 배포는 vercel을 이용하였습니다.
  ![img](/public/env1.png)
  ![img](/public/env2.png)
- 구글 클라우드

```
GOOGLE_CLIENT_ID =구글로그인시 사용되는 아이디입니다.
GOOGLE_CLIENT_SECRET=구글로그인시 사용되는 시크릿입니다.
NEXT_PUBLIC_GOOGLE_API_KEY=구글맵로드시 사용되는 키입니다.
NEXT_PUBLIC_GOOGLE_MAP_ID=구글맵아이디입니다.
SECRET=운영서버에 올릴시 필요한 key입니다. 로컬서버테스트시에는 별도로 지정안해도 됩니다.
```

- 위의 SECRET변수 관련하여 자세한 사항은 [이 링크](https://medium.com/@prodmxle/setting-up-nextauth-js-application-and-deploying-it-via-vercel-d6b02bf98397)를 참조하시면 됩니다.
