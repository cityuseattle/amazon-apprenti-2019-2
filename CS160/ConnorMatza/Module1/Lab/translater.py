
output = open("outputfile.txt", "w+")
input = open("C:/Users/cmatza/Downloads/names2", "r")

line = input.readline()
while line:
    line = line.replace("common-libs.dae85ff85.js:194 ", "")
    output.write(line)
    line = input.readline()
output.close()
input.close()