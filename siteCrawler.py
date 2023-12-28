import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def crawl_site(start_url):
    visited = set()
    links_map = {}

    def crawl(url):
        if url in visited:
            return
        visited.add(url)

        try:
            response = requests.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            links = []
            for tag in soup.find_all('a', href=True):
                full_link = urljoin(url, tag.get('href'))
                # Skip links with fragment identifiers or specific paths
                if '#' in full_link or full_link.startswith("http://127.0.0.1/Libraries"):
                    continue
                links.append(full_link)
                if full_link.startswith(start_url) and full_link not in visited:
                    crawl(full_link)
            links_map[url] = links

        except requests.exceptions.RequestException:
            pass

    crawl(start_url)
    return links_map


# Function to check URLs from the file against the site map
def check_urls(filename, site_map):
    broken_links = {}

    with open(filename, 'r') as file:
        for url in file:
            url = url.strip()
            try:
                response = requests.head(url, allow_redirects=True)
                if response.status_code == 404:
                    for page, links in site_map.items():
                        if url in links:
                            if page not in broken_links:
                                broken_links[page] = []
                            broken_links[page].append(url)
                            break
            except requests.exceptions.RequestException:
                pass

    return broken_links

# Main process
start_url = "http://127.0.0.1"  # Replace with your website's root URL
site_map = crawl_site(start_url)
broken_links_map = check_urls("urls.txt", site_map)  # Replace 'urls.txt' with your file

# Write the results to a Markdown file
with open("broken_links_report.md", "w") as md_file:
    for page, links in broken_links_map.items():
        md_file.write(f"## Page: {page}\n")
        for link in links:
            md_file.write(f"- [ ] {link}\n")
        md_file.write("\n")

print("Broken links report generated in 'broken_links_report.md'.")

