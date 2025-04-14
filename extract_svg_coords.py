import xml.etree.ElementTree as ET
import re

def parse_svg_path(path_data):
    commands = re.findall(r"[a-zA-Z]|-?\d*\.?\d+", path_data)  # Extract commands and numbers
    absolute_coords = []
    
    x, y = 0, 0  # Current absolute position
    start_x, start_y = 0, 0  # Track subpath starts
    
    i = 0
    while i < len(commands):
        cmd = commands[i]
        
        if cmd in "Mm":  # Move to (M absolute, m relative)
            x = float(commands[i + 1]) if cmd == "M" else x + float(commands[i + 1])
            y = float(commands[i + 2]) if cmd == "M" else y + float(commands[i + 2])
            start_x, start_y = x, y  # Update subpath start
            i += 3

        elif cmd in "Ll":  # Line to (L absolute, l relative)
            x = float(commands[i + 1]) if cmd == "L" else x + float(commands[i + 1])
            y = float(commands[i + 2]) if cmd == "L" else y + float(commands[i + 2])
            absolute_coords.append((x, y))
            i += 3

        elif cmd in "Hh":  # Horizontal line (H absolute, h relative)
            x = float(commands[i + 1]) if cmd == "H" else x + float(commands[i + 1])
            absolute_coords.append((x, y))
            i += 2

        elif cmd in "Vv":  # Vertical line (V absolute, v relative)
            y = float(commands[i + 1]) if cmd == "V" else y + float(commands[i + 1])
            absolute_coords.append((x, y))
            i += 2

        elif cmd in "Cc":  # Cubic Bezier curve (C absolute, c relative)
            x = float(commands[i + 5]) if cmd == "C" else x + float(commands[i + 5])
            y = float(commands[i + 6]) if cmd == "C" else y + float(commands[i + 6])
            absolute_coords.append((x, y))
            i += 7

        elif cmd in "Zz":  # Close path (return to start point)
            x, y = start_x, start_y
            absolute_coords.append((x, y))
            i += 1
        
        else:  # If we hit an unexpected case, move to the next command
            i += 1
    
    return absolute_coords

def extract_paths(svg_file):
    tree = ET.parse(svg_file)
    root = tree.getroot()
    paths = root.findall('.//{http://www.w3.org/2000/svg}path')

    if not paths:
        print("❌ No <path> elements found with 'd' attributes.")
        return

    for path in paths:
        path_id = path.get("id", "(no ID)")
        path_data = path.get("d", "(no path data)")
        absolute_coords = parse_svg_path(path_data)

        print(f"🆔 Path ID: {path_id}")
        print(f"📏 Absolute Coordinates: {absolute_coords}\n")

# Call function
extract_paths("map.svg")
