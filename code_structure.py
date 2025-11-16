import os

print("\n📁 Creating Full Portfolio Structure...\n")

# Folder and file structure
structure = [
    "index.html",
    "metadata.json",
    "src/App.tsx",
    "src/index.tsx",
    "src/types.ts",
    "src/ThemeContext.tsx",
    "src/components/Header.tsx",
    "src/components/Hero.tsx",
    "src/components/Skills.tsx",
    "src/components/Projects.tsx",
    "src/components/ProjectCard.tsx",
    "src/components/Testimonials.tsx",
    "src/components/Contact.tsx",
    "src/components/Footer.tsx",
    "src/components/ThemeSwitcher.tsx",
    "src/components/Section.tsx",
    "src/components/Icons.tsx",
    "src/components/Introduction.tsx",
    "src/components/Resume.tsx",
    "src/components/Collaboration.tsx",
    "src/components/Ethics.tsx",
    "src/components/Future.tsx",
    "src/components/Conclusion.tsx",
]

for path in structure:
    folder = os.path.dirname(path)
    if folder and not os.path.exists(folder):
        os.makedirs(folder)
    with open(path, "w", encoding="utf-8") as f:
        pass  # create empty file
    print(f"✅ Created: {path}")

print("\n🎉 Structure ready!")
print("👉 Now paste code from AI Studio into each file.\n")
