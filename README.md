# Air_Canvas
Classic Air Canvas with Text Recognition

Last Updated: 25-08-2024

**Table of Contents**
Project Overview
Features
System Architecture
Installation
Usage
Technology Stack
Results
Future Enhancements
Contributing
License

**Project Overview:**

Air Canvas is an innovative application designed to enhance real-time communication for the deaf and mute by leveraging gesture recognition and dynamic teaching tools. The project integrates hand-tracking, color detection, and optical character recognition (OCR) technologies to create an interactive digital canvas. Users can draw, write, and communicate using natural hand gestures, which are recognized and processed in real-time.

**Features:**


Real-Time Hand-Tracking: Detects and tracks hand movements using Mediapipe, enabling natural gesture-based interactions.

Dynamic Color Selection: Allows users to choose ink colors for drawing via a color detection interface with adjustable HSV values.

Interactive Digital Canvas: Supports drawing and writing on a digital canvas using hand gestures, with real-time updates.

Text Recognition: Converts handwritten or gestured input into editable text using Tesseract OCR.

User-Friendly Interface: Provides a cohesive and intuitive interface for seamless digital creation.

**System Architecture:**


The project is built using a modular architecture, with key components integrated into a cohesive application:


Camera Capturing and Hand-tracking Window: Captures live video feed and tracks hand movements.

Color Detectors Window: Provides trackbars for adjusting ink colors and a clear button to reset the canvas.

Paint Window: Displays the digital canvas where users can draw and write using hand gestures.

Detected Text Window: Shows recognized text from the canvas, leveraging OCR technology for text conversion.

**Installation Prerequisites:**


Python 3.x
pip (Python package installer)

Steps

Clone the Repository:git clone https://github.com/goutamhegde002/air-canvas.git
cd air-canvas

Install Required Packages:
pip install -r requirements.txt

Run the Application:
python main.py


**Usage:**

Launch the Application: After running main.py, the application interface will appear with the Camera Capturing and Hand-tracking Window.

Select Colors: Use the Color Detectors Window to adjust HSV values or select preset colors for drawing.

Draw and Write: Use hand gestures in front of the camera to draw on the digital canvas in the Paint Window.

Recognize Text: View the recognized text in the Detected Text Window, where gestured input is converted into editable text.

**Technology Stack:**

Frontend: HTML, CSS (for Flask web interface)

Backend: Python (Flask)

Computer Vision: OpenCV, Mediapipe

OCR: Tesseract

**Results**
The application was tested using various hand gestures and color detection settings. While gesture recognition accuracy varies depending on lighting and background conditions, the system demonstrates effective real-time tracking and text recognition. The integration of multiple components provides a seamless user experience for interactive digital creation.

**Future Enhancements**

Improved Gesture Recognition: Enhance the accuracy and robustness of hand-tracking and gesture recognition under varying conditions.

Expanded Gesture Library: Develop a wider range of recognizable gestures for more complex interactions.

Advanced Drawing Tools: Add features such as shape recognition, erasers, and undo/redo functionalities.

**Contributing**
Contributions are welcome! 

**License**
This project is licensed under the MIT License. See the LICENSE file for more details.
