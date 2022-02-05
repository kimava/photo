# Photo Organizer - Node.js Script

## Overview
Created for [Dream Coding](https://academy.dream-coding.com/) Node.js exercise.
<br/><br/>

```
node photo dirname
```

Your directory should be placed in Pictures directory - *homedir/Pictures/(yourdirname)*
<br/><br/>

## Requirements
1. Create 3 directories - **video, captured, and duplicated**

2. Move files to each directory according to the file extention.
- .mp4 & .mov -> **video**
- .png & .aae -> **captured**
- original photos of edited ones -> **duplicated** <br/>
(FYI, modified photos' file name starts with 'IMG_E')
<br/>

## What I missed and learned
- proper error handling is the key.
- asynchronous operations are needed when you read and rename files.
- should've considered users' os and written the path as required (in Pictures directory).
<br/>

#### Related blog post link (in Korean) [here](https://velog.io/@avakim/Photo-Organizer-Node.js-%EC%9E%90%EB%8F%99%ED%99%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B3%BC%EC%A0%9C-%ED%9B%84%EA%B8%B0)
