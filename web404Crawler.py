import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from tqdm import tqdm
import warnings
from requests.packages.urllib3.exceptions import InsecureRequestWarning

# Suppress only the single InsecureRequestWarning from urllib3 needed for unverified HTTPS requests
warnings.simplefilter('ignore', InsecureRequestWarning)

start_url = "https://127.0.0.1"  # Replace with your website URL (use 'https')
all_links = set()
broken_links = set()
visited_urls = set()

def gather_links(url):
    if url in visited_urls or not url.startswith(start_url) or '#' in url or url.startswith(start_url + "/Libraries"):
        return
    visited_urls.add(url)

    try:
        # Disable SSL verification for local testing
        response = requests.get(url, verify=False)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, 'html.parser')
        for link in soup.find_all('a', href=True):
            try:
                full_link = urljoin(url, link.get('href'))
                if '#' in full_link or full_link.startswith(start_url + "/Libraries"):
                    continue
                if full_link not in all_links:
                    all_links.add(full_link)
                    gather_links(full_link)
            except UnicodeError:
                pass  # Skip link if there's a UnicodeError

    except requests.exceptions.RequestException:
        pass  # Ignore errors during link gathering

# First pass: Gather all links
gather_links(start_url)

# Second pass: Check each link
for link in tqdm(all_links, desc="Checking Links", unit="link"):
    try:
        # Disable SSL verification for local testing
        response = requests.head(link, allow_redirects=True, verify=False)
        if response.status_code == 404:
            broken_links.add(link)
    except (requests.exceptions.RequestException, UnicodeError):
        pass  # Ignore errors during link checking

# Write broken links to a Markdown file
with open("broken_links_report.md", "w") as file:
    for link in broken_links:
        file.write(f"- [ ] {link}\n")

print("Broken links report generated in 'broken_links_report.md'.")

