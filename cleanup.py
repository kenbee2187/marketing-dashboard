
import os
import re

directory = r"c:\Users\abe.ren\Desktop\Antigravity\イベント_ナーチャリング"

# Regex to match **text** or ** text ** including over multiple lines
pattern = re.compile(r'\*\*(.*?)\*\*', re.DOTALL)

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        path = os.path.join(directory, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = pattern.sub(r'<strong>\1</strong>', content)
        
        if content != new_content:
            print(f"Fixed: {filename}")
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
        else:
            print(f"No changes: {filename}")
