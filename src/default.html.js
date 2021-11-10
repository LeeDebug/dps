module.exports = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>DPS Auto Skeleton</title>
    <style>
      @keyframes opacity {
        0% {
            opacity: 1
        }
        50% {
            opacity: .5
        }
        100% {
            opacity: 1
        }
      }
      @keyframes el-skeleton-loading {
        0% { background-position: 100% 50% }
        100%{ background-position: 0 50% }
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`;