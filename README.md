# Weather Dashboard

[Link to deployed project](https://kaciehatley.github.io/weather-dashboard)

## About the Project
This day planner was created with the intention of helping the user view current weather conditions, as well as the forecast for the 5 coming days. Users can also view past cities searched. The project utilizes HTML, CSS, JavaScript and third-party APIs such as Open Weather. This is the sixth project built as a part of the UNCC Coding Bootcamp.

## Styling

Most elemets were created dynamically with Javascript and styled/positioned using Bootstrap and a separate CSS.

All elements under the navbar are stored in one row and two columns.

Each UV Index background contained different colors to indicate danger level:
* Less than 2 - #8DE760
* Between 2 and 5 - #E4F06E
* Between 5 and 8 - #EBAC57
* Greater than 8 - #F34343

Weather icons were retrieved at: https://openweathermap.org/weather-conditions

## How To Use

The user begins by typing in the city they want to know the weather for. A search history will display below the input box. There is also a button allowing the user to clear their search history.

<img width="328" alt="Screen Shot 2019-11-26 at 3 40 34 PM" src="https://user-images.githubusercontent.com/55072295/69671011-2feba300-1063-11ea-9376-ae5867ddd10e.png">

When the user submits a new city or clicks on a past city, the current weather will display on the right side of the page along with a 5-day forecast.

<img width="508" alt="Screen Shot 2019-11-26 at 3 40 39 PM" src="https://user-images.githubusercontent.com/55072295/69671163-7f31d380-1063-11ea-900a-35665f6c5be5.png">

<img width="196" alt="Screen Shot 2019-11-26 at 3 40 57 PM" src="https://user-images.githubusercontent.com/55072295/69671195-8c4ec280-1063-11ea-9f23-f48abcf287a3.png">

## Credits

* Open Weather APIs: https://openweathermap.org/api
* JQuery: https://code.jquery.com/jquery-3.4.1.min.js
* AJAX: https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js
* Bootstrap: https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
* Font Awesome: https://use.fontawesome.com/releases/v5.8.1/css/all.css
* Google Fonts: https://fonts.googleapis.com/css?family=Open+Sans&display=swap

## License

The MIT License (MIT)

Copyright (c) 2019 Kacie Hatley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
