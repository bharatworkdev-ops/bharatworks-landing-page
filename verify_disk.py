with open(r'C:\Users\Acer\Desktop\bharatworks_landing_page\src\pages\AboutPage.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open(r'C:\Users\Acer\Desktop\bharatworks_landing_page\verify_disk.txt', 'w', encoding='utf-8') as f:
    for i in range(110, 135):
        if i < len(lines):
            f.write(f"{i+1}: {repr(lines[i])}\n")
            
print("Saved to verify_disk.txt")
