# Immigration Case Fee Calculator - Performance Optimization Prototype

## Overview
ClearPath Immigration law requires a fast and responsive internal tool that allows intake specialists to quickly estimate filing costs and processing timelines for different immigration case types. Over time, the calculator grew to include more than 200 visa scenarios, causing the interface to become slow when users search or filter cases.

This project delivers a prototype single-page web application that demonstrates both the performance problem and the optimized solution.

## Objectives
The tool must load a dataset containing at least 150 immigration case scenarios. Each case includes the visa category name, USCIS filing fee, estimated attorney fee, and processing time.

Users must be able to search visa types using a real-time search field. The initial implementation simulates a slow performance bottleneck where filtering recalculates the entire dataset on every keystroke, causing noticeable UI lag.

An optimized version must then be implemented using performance techniques such as:
    - Debouncing search input
    - Efficient DOM rendering
    - Memoized filtering logic

These improvements must ensure that search results update smoothly with a response time below 100 milliseconds, even when the dataset grows.

## Requirements
The calculator must display all visa scenarios and allow the user to select a case type.
Users can also enable optional filing add-on such as:
    - Premium Processing
    - Dependent Filing
    - Consular Processing

The system must automatically calculate the total estimated cost including USCIS feesm attorney fees, and selected add-ons.

The UI must be clean and professional, appropriate for use in a law firm environment. The interface must be responsive and accessible across desktop and mobile-devices.

## Deliverables
1. ZIP file: The complete source code of the project.
2. Public GitHub Repository: A link to the repository including a README with setup instructions.
3. Deployed Demo: A live link (via Vercel, Netlify, or GitHub Pages) to the functional tool.
4. Screen Recording: A short video showing the "Before" (simulated lag) and "After" (optimized) performance.