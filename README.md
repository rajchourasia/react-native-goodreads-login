# React Native Goodreads (OAuth) Login
This is a sample react native project implementing third party OAuth authentication, with Launch Screen, Video Background and Redux Integration. Currently only IOS is implemented.

I have chosen [Goodreads](https://www.goodreads.com) platform as it does not have a well documentation [API](https://www.goodreads.com/api), and SDK support, like Facebook, Twitter and other popular social platforms. Also unexpectedly, most of the API response from Goodreads is in XML format so the project handles API responses in both Json and XML.

This same code (with modifications) can be used for authentication and API calls with any other OAuth based third party platform.

## Features
* Third Party OAuth integration (Goodreads)
* API calls handling XML and Json response data
* Redux Integration with Redux logging in dev mode
* Handling Launch Screen
* Video Background
* Airbnb Eslint

## Plugins Used
### For OAuth and API calls
[react-native-oauth](https://github.com/fullstackreact/react-native-oauth) is used for authentication and API calls. This works out of the box for facebook, twitter, google, github and slack.

There is provision for adding any other OAuth service but it did not work as expected. There is also no support for XML response format. I had to create [PR 86](https://github.com/fullstackreact/react-native-oauth/pull/86) and [PR 88](https://github.com/fullstackreact/react-native-oauth/pull/88) to tackle both these issues. As these PRs have not been merged, for the time being, I am using [my fork of the same repository](https://github.com/rajchourasia/react-native-oauth/tree/xmldata).

### Others
[react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) is used to handle Launch Screen, while background tasks complete.

[react-native-video](https://github.com/react-native-community/react-native-video) is used for video background in Login screen.

[redux-logger](https://github.com/evgenyrodionov/redux-logger) is used log action calls and state in development mode.

## Demo
![Demo gif](https://github.com/rajchourasia/react-native-goodreads-login/blob/master/static/demo.gif)

## Notes
* This project is inspired by [react-native-login](https://github.com/brentvatne/react-native-login)
* The background video used is the example video in [react-native-video](https://github.com/react-native-community/react-native-video)

## License
MIT
