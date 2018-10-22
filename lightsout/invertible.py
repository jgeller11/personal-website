import numpy as np
lowerlimit = int(input('lower bound= '))
# enter lower bound of n values you would like to check
upperlimit = int(input('upper bound= '))
# upper bound

#this creates the n^2 x n^2 transformation matrix M for a given board size n
for n in range (lowerlimit, upperlimit+1):
    A=[]
    for x in range(n**2):
        row = []
        for y in range(n**2):
            if (y-x == 1) and (y%n!=0):
                row.append(1)
            elif (x-y == 1) and (x%n!=0):
                row.append(1)
            elif (x==y):
                row.append(1)
            elif (y+n == x):
                row.append(1)
            elif (y-n == x):
                row.append(1)
            else:
                row.append(0)
        A.append(row)
    # transform this into a numpy array q to calculate determinant
    q = np.array(A)
    # calculate the determinant. if det(q) = 0, then the matrix is not invertible and therefore not always solvable. here, i check if det(q) < 0.00001 because i have found that for higher values of n, even for a zero determinant, it is often returned as 10^-31 or something similar for rounding errors. this specific cutoff may very well introduce errors into my calculations, but i'm not all that worried about it for the low n-values i have been checking
    if (abs(np.linalg.det(q))<0.00001):
        print(str(n)+' is not invertible')
    else:
        print(str(n)+' is invertible')
# note: this whole process is built on the foundation that if M (or as i have called it, A) is not invertible, then that board size is not always solvable. i believe this is true, but i have not proved it so i could definitely be wrong.
