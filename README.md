# Elon Musk's Real-Time Earnings Calculator

A dynamic web application that shows how much money Elon Musk has earned since you loaded the page. The calculator features an animated real-time counter and contextual bubbles that compare his earnings to different salaries and product prices.

---

## Features

*   **Real-Time Counter:** An animated counter shows earnings ticking up every second.
*   **Dynamic Bubbles:** Pop-up bubbles provide context by comparing the earnings to real-world costs (e.g., a Tesla Model 3, a US President's salary).
*   **Multi-Language Support:** The entire interface, including the bubbles, can be switched between English, Spanish, Russian, and Hindi.
*   **Light/Dark Mode:** A theme toggle for user preference.

## How the Numbers Are Calculated

The earnings rate is based on an analysis of Elon Musk's approximate earnings per second. According to a 2024 report, his earnings are estimated to be around **$1,112 per second**.

*   **Source:** [Finance Monthly - How Much Does Elon Musk Make a Day?](https://www.finance-monthly.com/2025/01/elon-musks-daily-hourly-and-per-second-earnings-revealed/)

The numbers used in the bubble comparisons are based on publicly available data, with sources listed below.

---

## Bubble Comparison Sources

These are the amounts displayed in the bubbles and the sources for the data:

*   **$600:** The cost of a **Starlink** terminal. ([Starlink](https://www.starlink.com/))
*   **$13,500:** The cost of a **Tesla Powerwall 2** battery. ([Tesla](https://www.tesla.com/powerwall))
*   **$15,080:** **U.S. Minimum Yearly Wage**, based on $7.25/hour, 40h/week. ([U.S. Department of Labor](https://www.dol.gov/general/topic/wages/minimumwage))
*   **$40,000:** The approximate base price of a **Tesla Model 3**. ([Tesla](https://www.tesla.com/model3))
*   **$65,000:** The approximate **average yearly salary** in the United States. ([Forbes](https://www.forbes.com/advisor/income-statistics/))
*   **$80,000:** The approximate base price of a **Tesla Model S**. ([Tesla](https://www.tesla.com/models))
*   **$99,000:** The approximate base price of a **Tesla Cybertruck (AWD)**. ([Tesla](https://www.tesla.com/cybertruck))
*   **$120,000:** The approximate average salary of a **Senior Software Developer** in the US. ([Salary.com](https://www.salary.com/research/salary/benchmark/senior-software-developer-salary))
*   **$250,000:** The price for a seat on a **Virgin Galactic** spaceflight. ([Virgin Galactic](https://www.virgingalactic.com/))
*   **$300,000 - $400,000:** The median price of a **house in the USA**, which fluctuates. ([Federal Reserve Economic Data](https://fred.stlouisfed.org/series/MSPUS))
*   **$400,000:** The yearly salary of the **U.S. President**. ([Cornell Law School](https://www.law.cornell.edu/uscode/text/3/102))
*   **$550,000+:** The approximate annual income needed to be in the **U.S. top 1%**. ([Bloomberg](https://www.bloomberg.com/news/articles/2023-11-20/how-much-money-do-you-need-to-be-in-the-top-1-in-the-us))
*   **$1,000,000:** One million US dollars.

---

## Local Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sushang-Agnihotri/elon-calculator
    cd elon-calculator-(main)
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Create a `.env` file** in the root directory and add your own `SECRET_KEY`.
    ```
    SECRET_KEY='your-secret-key'
    DEBUG=True
    ```

5.  **Run the Django migrations and server:**
    ```bash
    python manage.py migrate
    python manage.py runserver
    ```
    The application will be available at `http://127.0.0.1:8000/`.
