export const characters = [
  //   "M 8.5 71.2 L 0 71.2 L 22.1 5.6 L 31.5 5.6 L 53.6 71.2 L 44.8 71.2 L 33.4 34.5 Q 31.7 29 30.05 23.55 Q 28.4 18.1 26.9 12.4 L 26.5 12.4 Q 24.9 18.1 23.3 23.55 Q 21.7 29 20 34.5 L 8.5 71.2 Z M 41.7 51.2 L 11.6 51.2 L 11.6 44.5 L 41.7 44.5 L 41.7 51.2 Z",
  //   "M 81.5 54.9 L 81.5 6.7 L 64.9 6.7 L 64.9 0 L 89.7 0 L 89.7 55.5 A 17.139 17.139 0 0 0 89.906 58.252 Q 90.144 59.712 90.658 60.865 A 7.018 7.018 0 0 0 92.3 63.2 Q 94.9 65.6 99.2 65.6 A 17.366 17.366 0 0 0 102.815 65.208 A 19.726 19.726 0 0 0 103.5 65.05 A 24.254 24.254 0 0 0 105.521 64.444 Q 106.541 64.092 107.651 63.625 A 42.409 42.409 0 0 0 108.4 63.3 L 110.5 69.5 Q 107.2 70.7 104.3 71.55 A 19.594 19.594 0 0 1 101.446 72.146 Q 99.587 72.4 97.4 72.4 A 21.344 21.344 0 0 1 92.734 71.921 Q 89.552 71.208 87.228 69.435 A 12.612 12.612 0 0 1 85.6 67.95 A 14.186 14.186 0 0 1 82.59 62.665 Q 81.5 59.334 81.5 54.9 Z",
  //   "M 146.8 72.4 Q 140.4 72.4 134.95 69.4 A 22.827 22.827 0 0 1 126.469 61.228 A 27.142 27.142 0 0 1 126.15 60.7 Q 122.8 55 122.8 47 A 33.573 33.573 0 0 1 123.353 40.75 Q 124.11 36.751 125.906 33.526 A 21.128 21.128 0 0 1 126.15 33.1 A 23.635 23.635 0 0 1 131.89 26.427 A 22.301 22.301 0 0 1 134.95 24.4 Q 140.4 21.4 146.8 21.4 Q 153.2 21.4 158.65 24.4 A 22.827 22.827 0 0 1 167.131 32.572 A 27.142 27.142 0 0 1 167.45 33.1 A 23.454 23.454 0 0 1 170.159 40.304 Q 170.76 43.218 170.797 46.553 A 39.644 39.644 0 0 1 170.8 47 A 31.955 31.955 0 0 1 170.159 53.56 A 23.491 23.491 0 0 1 167.45 60.7 A 23.635 23.635 0 0 1 161.71 67.373 A 22.301 22.301 0 0 1 158.65 69.4 Q 153.2 72.4 146.8 72.4 Z M 146.8 65.6 A 15.839 15.839 0 0 0 151.328 64.975 A 13.379 13.379 0 0 0 155 63.25 A 14.863 14.863 0 0 0 159.767 57.967 A 18.206 18.206 0 0 0 160.4 56.7 Q 162.3 52.5 162.3 47 A 28.057 28.057 0 0 0 161.883 42.047 A 21.055 21.055 0 0 0 160.4 37.15 Q 158.5 32.9 155 30.55 Q 151.5 28.2 146.8 28.2 Q 142.1 28.2 138.65 30.55 A 15.034 15.034 0 0 0 134.175 35.382 A 18.844 18.844 0 0 0 133.25 37.15 A 20.966 20.966 0 0 0 131.622 42.673 A 27.924 27.924 0 0 0 131.3 47 A 26.364 26.364 0 0 0 131.758 52.023 A 20.187 20.187 0 0 0 133.25 56.7 A 17.081 17.081 0 0 0 135.831 60.74 A 14.638 14.638 0 0 0 138.65 63.25 A 13.523 13.523 0 0 0 144.804 65.488 A 17.3 17.3 0 0 0 146.8 65.6 Z",
  //   "M 194.3 71.2 L 186.1 71.2 L 186.1 0 L 194.3 0 L 194.3 19.4 L 193.8 30.9 L 194.1 30.9 Q 197.8 26.9 202.2 24.15 A 18.179 18.179 0 0 1 210.55 21.467 A 22.445 22.445 0 0 1 212.3 21.4 A 23.408 23.408 0 0 1 217.123 21.864 Q 222.149 22.923 225 26.4 Q 228.163 30.257 228.886 36.853 A 38.12 38.12 0 0 1 229.1 41 L 229.1 71.2 L 220.9 71.2 L 220.9 42.1 A 29.365 29.365 0 0 0 220.694 38.5 Q 220.197 34.483 218.495 32.111 A 8.646 8.646 0 0 0 218.3 31.85 A 7.988 7.988 0 0 0 214.509 29.212 Q 213.136 28.734 211.437 28.577 A 18.903 18.903 0 0 0 209.7 28.5 Q 205.4 28.5 202 30.7 Q 198.6 32.9 194.3 37.3 L 194.3 71.2 Z",
  //   "M 250.2 34 L 247 28.4 Q 249.063 27.025 251.9 25.613 A 67.943 67.943 0 0 1 252.85 25.15 Q 256.3 23.5 260.3 22.45 Q 264.3 21.4 268.6 21.4 A 29.546 29.546 0 0 1 273.295 21.752 Q 275.795 22.154 277.861 23.019 A 15.899 15.899 0 0 1 279.65 23.9 Q 284 26.4 286.15 30.85 A 20.91 20.91 0 0 1 287.881 36.336 A 29.106 29.106 0 0 1 288.3 41.4 L 288.3 71.2 L 281.6 71.2 L 280.9 64.6 L 280.6 64.6 A 42.683 42.683 0 0 1 272.834 69.511 A 48.163 48.163 0 0 1 271.6 70.1 A 24.469 24.469 0 0 1 263.02 72.344 A 23.351 23.351 0 0 1 261.4 72.4 A 21.465 21.465 0 0 1 255.543 71.62 A 19.272 19.272 0 0 1 253.1 70.75 A 14.895 14.895 0 0 1 249.157 68.284 A 13.24 13.24 0 0 1 247.1 66 A 11.883 11.883 0 0 1 245.013 60.487 A 15.358 15.358 0 0 1 244.9 58.6 A 12.661 12.661 0 0 1 249.707 48.359 A 19.205 19.205 0 0 1 253.1 46.15 A 33.537 33.537 0 0 1 258.551 43.977 Q 266.588 41.478 280.1 40.4 Q 280 37.1 278.75 34.3 A 9.623 9.623 0 0 0 274.873 29.954 A 11.756 11.756 0 0 0 274.7 29.85 A 10.678 10.678 0 0 0 271.999 28.751 Q 270.706 28.409 269.168 28.279 A 23.43 23.43 0 0 0 267.2 28.2 Q 264.1 28.2 261.05 29.05 Q 258 29.9 255.25 31.25 A 68.563 68.563 0 0 0 251.988 32.957 A 56.455 56.455 0 0 0 250.2 34 Z M 280.1 58.6 L 280.1 45.8 A 164.434 164.434 0 0 0 274.035 46.431 Q 268.494 47.119 264.636 48.072 A 44.54 44.54 0 0 0 263.75 48.3 A 35.131 35.131 0 0 0 260.68 49.267 Q 257.643 50.392 255.915 51.835 A 8.533 8.533 0 0 0 255.35 52.35 A 8.69 8.69 0 0 0 253.643 54.703 A 7.467 7.467 0 0 0 252.9 58 A 7.98 7.98 0 0 0 253.148 60.037 A 6.003 6.003 0 0 0 254.4 62.45 A 8.233 8.233 0 0 0 257.324 64.605 A 10.301 10.301 0 0 0 258.35 65 A 16.456 16.456 0 0 0 262.691 65.778 A 19.021 19.021 0 0 0 263.6 65.8 A 19.296 19.296 0 0 0 271.002 64.293 A 22.555 22.555 0 0 0 271.9 63.9 A 34.054 34.054 0 0 0 276.512 61.288 A 43.741 43.741 0 0 0 280.1 58.6 Z",
  //   "M 329.6 48 L 324 48 L 323 13.6 L 322.8 4.2 L 330.8 4.2 L 330.6 13.6 L 329.6 48 Z M 321.652 70.302 A 7.11 7.11 0 0 0 326.8 72.4 Q 329.8 72.4 331.95 70.3 A 6.862 6.862 0 0 0 333.81 67.042 A 9.725 9.725 0 0 0 334.1 64.6 A 9.78 9.78 0 0 0 333.957 62.892 A 6.793 6.793 0 0 0 331.95 59.05 Q 329.8 57 326.8 57 Q 323.8 57 321.65 59.05 A 6.657 6.657 0 0 0 319.799 62.19 A 9.19 9.19 0 0 0 319.5 64.6 A 10.149 10.149 0 0 0 319.68 66.556 A 6.97 6.97 0 0 0 321.65 70.3 A 7.613 7.613 0 0 0 321.652 70.302 Z",
  "M 43.311 23.877 L 10.498 39.6 L 43.311 55.322 A 5.266 5.266 0 0 1 44.21 55.868 Q 44.684 56.232 44.954 56.66 A 2.296 2.296 0 0 1 45.313 57.91 Q 45.313 58.789 44.727 59.961 A 5.982 5.982 0 0 1 44.156 60.88 Q 43.802 61.341 43.402 61.622 A 2.318 2.318 0 0 1 42.041 62.061 A 3.301 3.301 0 0 1 41.203 61.946 Q 40.84 61.851 40.453 61.676 A 6.085 6.085 0 0 1 40.234 61.572 L 2.295 42.969 A 6.34 6.34 0 0 1 1.537 42.543 Q 1.163 42.295 0.887 42.019 A 2.986 2.986 0 0 1 0.537 41.602 Q 0 40.82 0 39.6 Q 0 38.379 0.537 37.598 A 3.209 3.209 0 0 1 1.125 36.962 Q 1.599 36.565 2.295 36.231 L 40.234 17.627 A 5.334 5.334 0 0 1 40.975 17.32 Q 41.391 17.186 41.777 17.151 A 2.952 2.952 0 0 1 42.041 17.139 A 2.397 2.397 0 0 1 43.694 17.812 Q 44.261 18.328 44.727 19.238 Q 45.13 20.045 45.256 20.714 A 3.118 3.118 0 0 1 45.313 21.289 A 2.389 2.389 0 0 1 44.531 23.055 Q 44.061 23.511 43.311 23.877 Z",
  "M 102.393 38.135 L 102.393 57.568 A 6.747 6.747 0 0 0 102.531 59 Q 102.982 61.067 104.904 61.373 A 4.533 4.533 0 0 0 105.615 61.426 L 107.324 61.426 Q 108.984 61.426 109.692 62.183 A 2.163 2.163 0 0 1 110.117 62.88 Q 110.37 63.524 110.397 64.503 A 8.681 8.681 0 0 1 110.4 64.746 Q 110.4 66.553 109.692 67.31 A 2.07 2.07 0 0 1 108.926 67.814 Q 108.284 68.066 107.325 68.067 L 104.199 68.067 A 10.604 10.604 0 0 1 101.422 67.718 A 8.483 8.483 0 0 1 98.755 66.48 A 7.046 7.046 0 0 1 96.144 63.005 A 9.574 9.574 0 0 1 95.801 61.817 A 30.823 30.823 0 0 1 87.786 66.961 A 29.153 29.153 0 0 1 87.134 67.236 A 25.899 25.899 0 0 1 77.246 69.141 A 24.58 24.58 0 0 1 72.738 68.746 A 18.765 18.765 0 0 1 68.53 67.456 Q 64.746 65.772 62.598 62.549 A 12.728 12.728 0 0 1 60.601 57.157 A 16.565 16.565 0 0 1 60.449 54.883 A 16.968 16.968 0 0 1 61.04 50.266 A 11.753 11.753 0 0 1 65.967 43.482 A 20.643 20.643 0 0 1 72.51 40.661 Q 75.228 39.984 78.408 39.836 A 39.093 39.093 0 0 1 80.225 39.795 Q 87.988 39.795 95.068 42.285 L 95.068 38.135 A 13.354 13.354 0 0 0 94.834 35.544 Q 94.278 32.739 92.407 31.177 A 7.941 7.941 0 0 0 90.015 29.845 Q 87.577 28.955 83.838 28.955 Q 80.176 28.955 76.221 29.981 A 37.265 37.265 0 0 0 68.701 32.813 A 4.533 4.533 0 0 1 68.111 33.076 Q 67.62 33.252 67.188 33.252 A 2.205 2.205 0 0 1 65.69 32.648 Q 65.34 32.336 65.026 31.865 A 6.996 6.996 0 0 1 64.502 30.908 A 8.246 8.246 0 0 1 64.222 30.222 Q 63.974 29.52 63.965 28.993 A 2.313 2.313 0 0 1 63.965 28.955 A 2.65 2.65 0 0 1 65.013 26.805 A 4.384 4.384 0 0 1 65.772 26.318 Q 69.873 24.17 74.585 23.023 A 39.801 39.801 0 0 1 84.033 21.875 A 32.858 32.858 0 0 1 89.079 22.237 Q 94.576 23.093 97.803 25.977 A 13.05 13.05 0 0 1 101.635 32.242 Q 102.393 34.862 102.393 38.135 Z M 95.068 54.199 L 95.068 48.877 A 42.367 42.367 0 0 0 89.828 47.557 A 49.248 49.248 0 0 0 87.94 47.241 Q 84.131 46.68 80.274 46.68 Q 76.427 46.68 73.691 47.585 A 11.563 11.563 0 0 0 71.411 48.609 A 6.293 6.293 0 0 0 68.298 53.124 A 9.275 9.275 0 0 0 68.164 54.736 A 8.244 8.244 0 0 0 68.497 57.14 A 6.28 6.28 0 0 0 70.63 60.278 A 8.253 8.253 0 0 0 73.429 61.714 Q 74.6 62.07 76.004 62.192 A 17.711 17.711 0 0 0 77.539 62.256 Q 87.256 62.256 95.068 54.199 Z",
  "M 132.471 7.324 L 132.471 31.641 A 26.819 26.819 0 0 1 135.895 27.46 A 21.051 21.051 0 0 1 139.819 24.39 A 17.153 17.153 0 0 1 148.828 21.875 A 17.249 17.249 0 0 1 152.736 22.299 A 13.421 13.421 0 0 1 156.543 23.804 Q 159.815 25.733 161.572 29.346 A 17.067 17.067 0 0 1 163.04 34.067 A 22.934 22.934 0 0 1 163.33 37.793 L 163.33 61.426 L 167.334 61.426 Q 168.994 61.426 169.702 62.183 A 2.163 2.163 0 0 1 170.127 62.88 Q 170.379 63.524 170.407 64.503 A 8.681 8.681 0 0 1 170.41 64.746 Q 170.41 66.553 169.702 67.31 A 2.07 2.07 0 0 1 168.935 67.814 Q 168.294 68.066 167.335 68.067 L 151.514 68.067 Q 149.854 68.067 149.146 67.31 A 2.163 2.163 0 0 1 148.721 66.612 Q 148.468 65.968 148.441 64.99 A 8.681 8.681 0 0 1 148.438 64.746 Q 148.438 62.94 149.146 62.183 A 2.07 2.07 0 0 1 149.912 61.679 Q 150.554 61.426 151.513 61.426 L 156.006 61.426 L 156.006 38.525 A 15.283 15.283 0 0 0 155.769 35.751 Q 155.318 33.307 154.004 31.641 A 6.465 6.465 0 0 0 150.063 29.286 A 9.947 9.947 0 0 0 148.096 29.102 A 13.688 13.688 0 0 0 140.357 31.494 A 16.67 16.67 0 0 0 135.326 36.818 A 20.196 20.196 0 0 0 134.619 38.086 A 19.747 19.747 0 0 0 132.534 45.711 A 23.798 23.798 0 0 0 132.471 47.461 L 132.471 61.426 L 136.963 61.426 Q 138.623 61.426 139.331 62.183 A 2.163 2.163 0 0 1 139.756 62.88 Q 140.008 63.524 140.036 64.503 A 8.681 8.681 0 0 1 140.039 64.746 Q 140.039 66.553 139.331 67.31 A 2.07 2.07 0 0 1 138.564 67.814 Q 137.923 68.066 136.963 68.067 L 121.143 68.067 Q 119.483 68.067 118.774 67.31 A 2.163 2.163 0 0 1 118.35 66.612 Q 118.097 65.968 118.07 64.99 A 8.681 8.681 0 0 1 118.066 64.746 Q 118.066 62.94 118.774 62.183 A 2.07 2.07 0 0 1 119.541 61.679 Q 120.183 61.426 121.142 61.426 L 125.147 61.426 L 125.147 10.645 L 120.654 10.645 Q 118.994 10.645 118.286 9.888 A 2.163 2.163 0 0 1 117.862 9.19 Q 117.609 8.546 117.582 7.568 A 8.681 8.681 0 0 1 117.578 7.324 Q 117.578 5.518 118.286 4.761 A 2.07 2.07 0 0 1 119.053 4.257 Q 119.694 4.004 120.654 4.004 L 129.395 4.004 Q 131.055 4.004 131.763 4.761 A 2.163 2.163 0 0 1 132.187 5.458 Q 132.44 6.102 132.467 7.081 A 8.681 8.681 0 0 1 132.471 7.324 Z",
  "M 210.84 44.775 L 194.434 61.426 L 215.625 61.426 L 215.625 55.274 A 5.537 5.537 0 0 1 215.689 54.401 Q 215.855 53.361 216.455 52.832 Q 217.285 52.1 219.287 52.1 A 8.738 8.738 0 0 1 220.215 52.145 Q 221.22 52.253 221.819 52.614 A 2.046 2.046 0 0 1 222.119 52.832 A 2.17 2.17 0 0 1 222.7 53.694 Q 222.949 54.337 222.949 55.274 L 222.949 64.746 Q 222.949 66.553 222.241 67.31 A 2.07 2.07 0 0 1 221.474 67.814 Q 220.833 68.066 219.874 68.067 L 185.986 68.067 Q 184.326 68.067 183.618 67.31 A 2.163 2.163 0 0 1 183.194 66.612 Q 182.941 65.968 182.914 64.99 A 8.681 8.681 0 0 1 182.91 64.746 A 7.426 7.426 0 0 1 182.962 63.836 Q 183.083 62.859 183.488 62.298 A 1.903 1.903 0 0 1 183.643 62.109 L 205.127 40.332 A 80.693 80.693 0 0 0 207.56 37.742 Q 209.792 35.251 211.056 33.318 A 19.006 19.006 0 0 0 211.45 32.691 A 12.544 12.544 0 0 0 213.281 26.123 A 11.466 11.466 0 0 0 212.873 22.982 A 8.576 8.576 0 0 0 210.376 18.921 Q 207.822 16.581 203.4 16.299 A 19.614 19.614 0 0 0 202.149 16.26 Q 196.777 16.26 192.041 18.994 L 192.041 24.365 A 5.537 5.537 0 0 1 191.977 25.238 Q 191.811 26.277 191.211 26.807 Q 190.381 27.539 188.379 27.539 A 8.738 8.738 0 0 1 187.451 27.493 Q 186.447 27.386 185.847 27.025 A 2.046 2.046 0 0 1 185.547 26.807 A 2.17 2.17 0 0 1 184.966 25.945 Q 184.717 25.302 184.717 24.365 L 184.717 17.188 A 5.046 5.046 0 0 1 184.806 16.205 Q 184.916 15.652 185.162 15.235 A 2.316 2.316 0 0 1 185.84 14.502 A 29.558 29.558 0 0 1 193.555 10.474 Q 197.705 9.033 202.1 9.033 A 26.859 26.859 0 0 1 207.104 9.479 A 20.262 20.262 0 0 1 212.036 11.06 Q 216.309 13.086 218.652 16.943 Q 220.996 20.801 220.996 26.123 A 17.675 17.675 0 0 1 218.53 35.278 A 34.007 34.007 0 0 1 216.402 38.427 Q 214.187 41.366 210.84 44.775 Z",
  "M 287.256 68.067 L 271.436 68.067 Q 269.775 68.067 269.067 67.31 A 2.163 2.163 0 0 1 268.643 66.612 Q 268.39 65.968 268.363 64.99 A 8.681 8.681 0 0 1 268.359 64.746 Q 268.359 62.94 269.067 62.183 A 2.07 2.07 0 0 1 269.834 61.679 Q 270.476 61.426 271.435 61.426 L 274.951 61.426 L 262.695 46.875 L 253.809 54.688 L 253.809 61.426 L 257.373 61.426 Q 259.033 61.426 259.741 62.183 A 2.163 2.163 0 0 1 260.166 62.88 Q 260.418 63.524 260.446 64.503 A 8.681 8.681 0 0 1 260.449 64.746 Q 260.449 66.553 259.741 67.31 A 2.07 2.07 0 0 1 258.974 67.814 Q 258.333 68.066 257.374 68.067 L 241.065 68.067 Q 239.404 68.067 238.696 67.31 A 2.163 2.163 0 0 1 238.272 66.612 Q 238.019 65.968 237.992 64.99 A 8.681 8.681 0 0 1 237.988 64.746 Q 237.988 62.94 238.696 62.183 A 2.07 2.07 0 0 1 239.463 61.679 Q 240.105 61.426 241.064 61.426 L 246.484 61.426 L 246.484 10.645 L 240.088 10.645 Q 238.428 10.645 237.72 9.888 A 2.163 2.163 0 0 1 237.295 9.19 Q 237.043 8.546 237.015 7.568 A 8.681 8.681 0 0 1 237.012 7.324 Q 237.012 5.518 237.72 4.761 A 2.07 2.07 0 0 1 238.487 4.257 Q 239.128 4.004 240.088 4.004 L 250.733 4.004 Q 252.393 4.004 253.101 4.761 A 2.163 2.163 0 0 1 253.525 5.458 Q 253.778 6.102 253.805 7.081 A 8.681 8.681 0 0 1 253.809 7.324 L 253.809 45.996 L 272.412 29.59 L 268.945 29.59 Q 267.285 29.59 266.577 28.833 A 2.163 2.163 0 0 1 266.153 28.136 Q 265.9 27.491 265.873 26.513 A 8.681 8.681 0 0 1 265.869 26.27 Q 265.869 24.463 266.577 23.706 A 2.07 2.07 0 0 1 267.344 23.202 Q 267.985 22.949 268.945 22.949 L 285.254 22.949 Q 286.914 22.949 287.622 23.706 A 2.163 2.163 0 0 1 288.047 24.404 Q 288.299 25.048 288.327 26.026 A 8.681 8.681 0 0 1 288.33 26.27 Q 288.33 28.076 287.622 28.833 A 2.07 2.07 0 0 1 286.855 29.337 Q 286.214 29.59 285.254 29.59 L 282.373 29.59 L 268.018 42.236 L 284.424 61.426 L 287.256 61.426 Q 288.916 61.426 289.624 62.183 A 2.163 2.163 0 0 1 290.049 62.88 Q 290.301 63.524 290.329 64.503 A 8.681 8.681 0 0 1 290.332 64.746 Q 290.332 66.553 289.624 67.31 A 2.07 2.07 0 0 1 288.857 67.814 Q 288.216 68.066 287.256 68.067 Z",
  "M 330.274 56.494 L 330.274 65.479 A 2.77 2.77 0 0 1 330.092 66.507 Q 329.813 67.211 329.104 67.65 A 3.407 3.407 0 0 1 328.735 67.847 Q 327.478 68.426 324.899 68.531 A 29.808 29.808 0 0 1 323.682 68.555 Q 320.927 68.555 319.386 68.12 A 5.186 5.186 0 0 1 318.628 67.847 A 2.93 2.93 0 0 1 317.785 67.28 Q 317.09 66.594 317.09 65.479 L 317.09 56.494 A 2.77 2.77 0 0 1 317.272 55.465 Q 317.551 54.762 318.259 54.323 A 3.407 3.407 0 0 1 318.628 54.126 Q 319.885 53.547 322.464 53.442 A 29.808 29.808 0 0 1 323.682 53.418 Q 326.437 53.418 327.978 53.853 A 5.186 5.186 0 0 1 328.735 54.126 A 2.93 2.93 0 0 1 329.579 54.693 Q 330.274 55.378 330.274 56.494 Z",
  "M 403.76 7.324 L 403.76 61.426 L 407.764 61.426 Q 409.424 61.426 410.132 62.183 A 2.163 2.163 0 0 1 410.556 62.88 Q 410.809 63.524 410.837 64.503 A 8.681 8.681 0 0 1 410.84 64.746 Q 410.84 66.553 410.132 67.31 A 2.07 2.07 0 0 1 409.365 67.814 Q 408.724 68.066 407.764 68.067 L 400 68.067 Q 398.34 68.067 397.632 67.31 A 2.163 2.163 0 0 1 397.207 66.612 Q 396.955 65.968 396.927 64.99 A 8.681 8.681 0 0 1 396.924 64.746 L 396.924 60.84 A 23.262 23.262 0 0 1 392.697 65.12 A 20.343 20.343 0 0 1 389.795 66.992 A 18.577 18.577 0 0 1 380.957 69.141 A 21.951 21.951 0 0 1 374.091 68.094 A 19.65 19.65 0 0 1 370.117 66.284 A 19.509 19.509 0 0 1 363.128 59.062 A 23.667 23.667 0 0 1 362.598 58.081 A 24.366 24.366 0 0 1 360.315 51.069 A 32.818 32.818 0 0 1 359.863 45.508 Q 359.863 38.281 362.598 32.935 A 20.824 20.824 0 0 1 366.692 27.343 A 18.921 18.921 0 0 1 370.117 24.732 A 20.352 20.352 0 0 1 379.463 21.92 A 24.71 24.71 0 0 1 380.957 21.875 A 18.412 18.412 0 0 1 394.764 27.989 A 26.592 26.592 0 0 1 396.436 29.932 L 396.436 10.645 L 388.525 10.645 Q 386.865 10.645 386.157 9.888 A 2.163 2.163 0 0 1 385.733 9.19 Q 385.48 8.546 385.453 7.568 A 8.681 8.681 0 0 1 385.449 7.324 Q 385.449 5.518 386.157 4.761 A 2.07 2.07 0 0 1 386.924 4.257 Q 387.566 4.004 388.525 4.004 L 400.684 4.004 Q 402.344 4.004 403.052 4.761 A 2.163 2.163 0 0 1 403.476 5.458 Q 403.729 6.102 403.756 7.081 A 8.681 8.681 0 0 1 403.76 7.324 Z M 381.445 29.102 A 15.227 15.227 0 0 0 377.669 29.55 A 11.982 11.982 0 0 0 373.975 31.177 A 12.88 12.88 0 0 0 369.59 36.171 A 15.702 15.702 0 0 0 369.214 36.963 A 18.876 18.876 0 0 0 367.848 41.766 A 24.93 24.93 0 0 0 367.578 45.508 A 24.321 24.321 0 0 0 367.962 49.927 A 18.538 18.538 0 0 0 369.214 54.053 Q 370.85 57.764 373.975 59.839 A 12.333 12.333 0 0 0 379.035 61.741 A 16.215 16.215 0 0 0 381.445 61.914 A 16.496 16.496 0 0 0 386.018 61.3 A 14.157 14.157 0 0 0 389.185 59.961 A 13.464 13.464 0 0 0 394.26 54.754 A 16.257 16.257 0 0 0 394.507 54.297 A 16.702 16.702 0 0 0 396.111 49.444 A 22.809 22.809 0 0 0 396.436 45.508 A 22.582 22.582 0 0 0 396.066 41.326 A 16.587 16.587 0 0 0 394.507 36.719 A 14.15 14.15 0 0 0 391.435 32.686 A 13.131 13.131 0 0 0 389.185 31.055 A 14.707 14.707 0 0 0 383.172 29.182 A 18.143 18.143 0 0 0 381.445 29.102 Z",
  "M 463.818 47.315 L 428.467 47.315 Q 428.723 52.757 431.014 56.218 A 11.845 11.845 0 0 0 432.788 58.325 A 12.991 12.991 0 0 0 438.126 61.294 Q 440.746 62.061 444.043 62.061 Q 448.535 62.061 452.93 60.913 A 35.506 35.506 0 0 0 457.296 59.48 A 27.424 27.424 0 0 0 460.645 57.861 A 4.533 4.533 0 0 1 461.234 57.598 Q 461.726 57.422 462.158 57.422 Q 463.842 57.422 464.909 59.933 A 9.788 9.788 0 0 1 464.941 60.01 A 6.323 6.323 0 0 1 465.218 60.781 Q 465.381 61.36 465.381 61.865 A 3 3 0 0 1 464.172 64.301 A 5.234 5.234 0 0 1 463.233 64.893 Q 459.59 66.737 454.665 67.895 A 53.749 53.749 0 0 1 454.346 67.969 Q 449.219 69.141 444.043 69.141 Q 436.87 69.141 431.73 66.46 A 20.179 20.179 0 0 1 431.445 66.309 A 18.875 18.875 0 0 1 423.486 58.154 A 23.97 23.97 0 0 1 421.275 51.533 A 33.025 33.025 0 0 1 420.752 45.508 A 27.825 27.825 0 0 1 421.568 38.64 A 22.86 22.86 0 0 1 423.731 33.154 A 21.038 21.038 0 0 1 431.983 24.829 A 23.213 23.213 0 0 1 440.945 22.037 A 28.94 28.94 0 0 1 444.043 21.875 A 29.293 29.293 0 0 1 449.744 22.402 A 21.037 21.037 0 0 1 456.128 24.732 A 19.449 19.449 0 0 1 463.818 32.642 A 26.127 26.127 0 0 1 466.391 40.127 A 33.135 33.135 0 0 1 466.895 44.287 Q 466.895 45.802 466.305 46.504 A 1.667 1.667 0 0 1 466.187 46.631 A 2.044 2.044 0 0 1 465.505 47.054 Q 464.891 47.296 463.965 47.313 A 7.757 7.757 0 0 1 463.818 47.315 Z M 428.955 40.479 L 458.789 40.479 A 17.163 17.163 0 0 0 457.598 36.534 A 12.214 12.214 0 0 0 454.077 31.909 A 12.601 12.601 0 0 0 449.568 29.648 Q 447.118 28.955 444.043 28.955 Q 438.037 28.955 434.107 32.007 A 13.803 13.803 0 0 0 429.456 38.681 A 18.072 18.072 0 0 0 428.955 40.479 Z",
  "M 528.027 29.59 L 524.951 29.59 L 509.18 65.967 A 5.582 5.582 0 0 1 508.471 67.227 A 4.288 4.288 0 0 1 507.153 68.384 A 5.044 5.044 0 0 1 505.999 68.845 Q 505.422 69.002 504.73 69.076 A 12.435 12.435 0 0 1 503.418 69.141 A 11.723 11.723 0 0 1 502.056 69.067 Q 501.384 68.988 500.83 68.825 A 4.679 4.679 0 0 1 499.78 68.384 A 4.53 4.53 0 0 1 498.355 67.046 A 6.327 6.327 0 0 1 497.754 65.967 L 482.129 29.59 L 479.102 29.59 Q 477.441 29.59 476.733 28.833 A 2.163 2.163 0 0 1 476.309 28.136 Q 476.056 27.491 476.029 26.513 A 8.681 8.681 0 0 1 476.025 26.27 Q 476.025 24.463 476.733 23.706 A 2.07 2.07 0 0 1 477.5 23.202 Q 478.142 22.949 479.101 22.949 L 496.387 22.949 Q 498.047 22.949 498.755 23.706 A 2.163 2.163 0 0 1 499.179 24.404 Q 499.432 25.048 499.46 26.026 A 8.681 8.681 0 0 1 499.463 26.27 Q 499.463 28.076 498.755 28.833 A 2.07 2.07 0 0 1 497.988 29.337 Q 497.347 29.59 496.387 29.59 L 490.137 29.59 L 503.467 61.426 L 516.943 29.59 L 512.695 29.59 Q 511.035 29.59 510.327 28.833 A 2.163 2.163 0 0 1 509.903 28.136 Q 509.65 27.491 509.623 26.513 A 8.681 8.681 0 0 1 509.619 26.27 Q 509.619 24.463 510.327 23.706 A 2.07 2.07 0 0 1 511.094 23.202 Q 511.735 22.949 512.695 22.949 L 528.027 22.949 Q 529.688 22.949 530.396 23.706 A 2.163 2.163 0 0 1 530.82 24.404 Q 531.073 25.048 531.1 26.026 A 8.681 8.681 0 0 1 531.104 26.27 Q 531.104 28.076 530.396 28.833 A 2.07 2.07 0 0 1 529.629 29.337 Q 528.987 29.59 528.028 29.59 Z",
  "M 643.652 3.418 L 610.84 83.643 A 2.555 2.555 0 0 1 610.061 84.632 A 3.393 3.393 0 0 1 609.644 84.912 Q 608.789 85.4 607.666 85.4 Q 606.075 85.4 604.938 84.915 A 4.623 4.623 0 0 1 604.443 84.668 Q 603.174 83.936 603.174 82.813 A 2.369 2.369 0 0 1 603.225 82.332 A 3.083 3.083 0 0 1 603.32 81.983 L 636.133 1.758 A 2.555 2.555 0 0 1 636.911 0.768 A 3.393 3.393 0 0 1 637.329 0.488 Q 638.184 0 639.307 0 Q 640.897 0 642.035 0.486 A 4.623 4.623 0 0 1 642.529 0.733 Q 643.799 1.465 643.799 2.588 A 2.369 2.369 0 0 1 643.747 3.068 A 3.083 3.083 0 0 1 643.652 3.418 Z",
  "M 705.029 42.969 L 667.09 61.572 A 5.334 5.334 0 0 1 666.349 61.879 Q 665.934 62.014 665.548 62.049 A 2.952 2.952 0 0 1 665.283 62.061 A 2.397 2.397 0 0 1 663.63 61.387 Q 663.064 60.871 662.598 59.961 Q 662.194 59.154 662.069 58.486 A 3.118 3.118 0 0 1 662.012 57.91 A 2.389 2.389 0 0 1 662.794 56.144 Q 663.263 55.689 664.014 55.322 L 696.826 39.6 L 664.014 23.877 A 5.266 5.266 0 0 1 663.115 23.331 Q 662.641 22.968 662.37 22.54 A 2.296 2.296 0 0 1 662.012 21.289 Q 662.012 20.41 662.598 19.238 A 5.982 5.982 0 0 1 663.168 18.32 Q 663.522 17.858 663.923 17.577 A 2.318 2.318 0 0 1 665.283 17.139 A 3.301 3.301 0 0 1 666.122 17.253 Q 666.485 17.349 666.871 17.523 A 6.085 6.085 0 0 1 667.09 17.627 L 705.029 36.231 A 6.34 6.34 0 0 1 705.788 36.656 Q 706.162 36.904 706.437 37.18 A 2.986 2.986 0 0 1 706.787 37.598 Q 707.324 38.379 707.324 39.6 Q 707.324 40.82 706.787 41.602 A 3.209 3.209 0 0 1 706.199 42.237 Q 705.726 42.635 705.029 42.969 Z",
];

export const canvasImages = [
  // "expressjs",
  "javascript",
  "react",
  "typescript",
  "nodejs",
  "tailwindcss",
  "vscode",
  "git",
]
  .map(
    (icon) =>
      `https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`
  )
  .concat([
    "https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png",
    "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
    "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
    "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
    "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
    "https://seeklogo.com/images/P/postgresql-logo-5309879B58-seeklogo.com.png",
    "https://seeklogo.com/images/A/azure-sql-logo-3AE930D2AF-seeklogo.com.png",
    "https://seeklogo.com/images/S/stripe-logo-C409DC9652-seeklogo.com.png",
  ]);

export const socialLinks = [
  {
    title: "Github",
    icon: "/github.png",
    link: "https://github.com/ah2k-dev",
  },
  {
    title: "Linkedin",
    icon: "/linkedin.png",
    link: "https://www.linkedin.com/in/ahmed-hassan-535767224/",
  },
  {
    title: "Facebook",
    icon: "/facebook.png",
    link: "https://www.facebook.com/ahmedhassan2k/",
  },
];

export const data = {
  skills: [
    {
      image:
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg",
      title: "HTML",
    },

    {
      image:
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg",
      title: "JavaScript",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/typescript.svg",
      title: "TypeScript",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
      title: "React",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
      title: "React-Native",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg",
      title: "CSS",
    },
    {
      image:
        "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
      title: "Ant Design",
    },
    {
      image:
        "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",

      title: "Bootstrap",
    },
    {
      image:
        "https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png",

      title: "Material UI",
    },
    {
      image:
        "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
      title: "Redux",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg",
      title: "NodeJS",
    },
    {
      image:
        "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
      title: "Express",
    },
    {
      image:
        "https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2018/03/socket.png?fit=375%2C375&ssl=1",
      title: "Socket.io",
    },
    {
      image:
        "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
      title: "MongoDB",
    },
    {
      image:
        "https://seeklogo.com/images/A/azure-sql-logo-3AE930D2AF-seeklogo.com.png",
      title: "SQL",
    },
    {
      image:
        "https://seeklogo.com/images/P/postgresql-logo-5309879B58-seeklogo.com.png",

      title: "PostgreSQL",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/git.svg",
      title: "Git",
    },
    {
      image: "https://static.expo.dev/static/brand/square-512x512.png",
      title: "Expo CLI",
    },
    {
      image:
        "https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/github-icon-13-256.png",
      title: "Github",
    },
    {
      image:
        "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
      title: "AWS",
    },
    {
      image:
        "https://seeklogo.com/images/A/aws-ec2-elastic-compute-cloud-logo-2F9E73DBA5-seeklogo.com.png",
      title: "AWS EC2",
    },
    {
      image:
        "https://seeklogo.com/images/A/aws-s3-simple-storage-service-logo-B280D33C1B-seeklogo.com.png",
      title: "AWS S3",
    },
    {
      image:
        "https://seeklogo.com/images/A/aws-route-53-logo-EEB0D14819-seeklogo.com.png",
      title: "AWS Route53",
    },
    {
      image:
        "https://seeklogo.com/images/A/aws-cognito-logo-ADE65FC971-seeklogo.com.png",
      title: "AWS Cognito",
    },
    {
      image:
        "https://seeklogo.com/images/A/aws-lambda-logo-AE95CFC218-seeklogo.com.png",
      title: "AWS Lambda",
    },
    {
      image:
        "https://seeklogo.com/images/A/aws-amplify-logo-D68DDB5AB1-seeklogo.com.png",
      title: "AWS Amplify",
    },
    {
      image:
        "https://seeklogo.com/images/A/aws-rds-relational-database-service-logo-99EA3E8EA4-seeklogo.com.png",
      title: "AWS RDS",
    },
    {
      image:
        "https://seeklogo.com/images/A/aws-dynamodb-logo-CF7BCC577D-seeklogo.com.png",
      title: "AWS DynamoDB",
    },
  ],
  projects: [
    {
      title: "Smart Course Allocation System",
      description:
        "SCAS includes portals for students, lecturers, and administrators. The system allows students to register for courses, view their course history, and submit queries. Lecturers can add and update their expertise, view assigned courses, and request updates to course information. The admin portal includes functionality to add and update course, room, lecturer, timeslots and student information. Our system automatically assign courses to rooms and timeslots, and assign courses to lecturers based on their expertise.",
      technologies: [
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
        "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
        "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg",
        "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
        "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/git.svg",
      ],
      image: {
        url: "https://media.graphassets.com/resize=width:700/output=format:webp/3ZIRqpAJTkmCKLNjS1N1",
      },
    },
    {
      title: "E-Commerce Website",
      description:
        "Our e-commerce website is your one-stop-shop for all your shopping needs! With our intuitive platform, administrators can create and organize products by categories in a snap and has a dashboard to track sales. Our client portal provides an immersive and personalized shopping experience where customers can browse, purchase, and review products. Our system offers secure and seamless online payments, and our powerful filtering options help you find products that match your style and budget. Experience shopping like never before with our innovative and user-friendly e-commerce website!",
      technologies: [
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
        "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg",
        "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
        "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/git.svg",
      ],
      image: {
        url: "https://media.graphassets.com/resize=width:700/output=format:webp/3ZIRqpAJTkmCKLNjS1N1",
      },
    },
    {
      title: "Insight Meter",
      description:
        "Welcome to the Insight Meter system, where insights meet simplicity! Our cutting-edge platform provides an immersive and engaging experience for survey creators, managers, and responders alike. With our mobile app, users can share their thoughts and opinions on surveys that match their interests and age groups. Meanwhile, the administrator portal offers a rich and intuitive dashboard to manage clients, survey responses, and payments with ease. Our clients can create surveys and analyze results with data visualization tools that make insights pop! Join us on this exciting journey and take the guesswork out of decision-making with the Insight Meter system.",
      technologies: [
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
        "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
        "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg",
        "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
        "https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2018/03/socket.png?fit=375%2C375&ssl=1",
        "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/git.svg",
      ],
      image: {
        url: "https://media.graphassets.com/resize=width:700/output=format:webp/3ZIRqpAJTkmCKLNjS1N1",
      },
    },
    {
      title: "Employee Management System",
      description:
        "The employee management system is the ultimate solution for organizations seeking efficient and productive employee management. The dual admin and employee portals, along with three distinct user roles, make it easy to manage projects, assign tasks, monitor attendance, and generate insightful reports. The cutting-edge feature that takes screenshots every 30 seconds, provides a unique and valuable insight into employee productivity and project progress, making it the ideal tool for organizations looking to streamline their workforce management.",
      technologies: [
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
        "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
        "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg",
        "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
        "https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2018/03/socket.png?fit=375%2C375&ssl=1",
        "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/git.svg",
        "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
      ],
      image: {
        url: "https://media.graphassets.com/resize=width:700/output=format:webp/3ZIRqpAJTkmCKLNjS1N1",
      },
    },
    {
      title: "Deep Stats",
      description:
        "Deeps Stat is not just another dashboard – it's a data visualization powerhouse that delivers insights like never before. Powered by React, Deeps Stat features a cutting-edge heat map that showcases the impact of user entries based on location. Whether it's tracking the spread of diseases like Covid-19 or Dengue fever, or visualizing the impact of responses to surveys and feedback, Deeps Stat makes it easy to identify trends and patterns. The dashboard's category-wise details also allow for a deeper analysis of the data, enabling users to make informed decisions. With a sleek and intuitive interface and customizable options, Deeps Stat is the perfect solution for anyone looking to visualize complex data in a creative and effective way.",
      technologies: [
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
        "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
        "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg",
        "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
        "https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2018/03/socket.png?fit=375%2C375&ssl=1",
        "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/git.svg",
        "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
      ],
      image: {
        url: "https://media.graphassets.com/resize=width:700/output=format:webp/3ZIRqpAJTkmCKLNjS1N1",
      },
    },
  ],
  smallProjects: [
    {
      id: "cl41bd91j4h2j0b14h717fxus",
      title: "Job Portal",
      description: "A movie website built with TMDB and 2embed",
      link: "https://e-cinema.vercel.app/",
      icon: {
        url: "https://media.graphassets.com/resize=height:40/output=format:webp/NVLrClLvSIa2D3SfZnoR",
      },
    },
  ],
};
