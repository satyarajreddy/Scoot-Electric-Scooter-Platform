"""
    Sieve of Eratosthenes. This is an algorithm which locates prime numbers. A prime number can only be divided evenly by 1 and itself. We locate primes by making a table of all numbers, and then crossing out the numbers which are multiples of other numbers. What is left must be prime.
    Consider the procedure and write a python program using the same logic.
    Sieve of Eratosthenes - Set Version
    1.    Initialize
        Create a set, prime which has integers between 2 and 5000.
        p ← 2
    2.    Generate Primes. while 2 ≤ p < 5000
        a.    Find Next Prime. while it is not in prime and 2 ≤ p < 5000: increment p.
            At this point, p is prime.
        b.    Remove Multiples
            k ← p + p
            while k < 5000
                i.    Remove k from the set prime
                ii.    k ← k + p
        c.    Next p. increment p
    3.    Report
    
    At this point, the set prime has the prime numbers. We can return the set.
    In this case, step 2b, Remove Multiples, can be revised to create the set of multiples, and use difference update to remove the multiples from prime. You can, also, use the range function to create multiples of p, and create a set from this sequence of multiples.
    """
#Sarthak Raj
#1641152
class SieveOfEratosthenes:
    def __init__(self, prime):
        u = 5000
        l = 2
        self.prime = prime
        for p in range(l, u):
            self.prime.add(p); #add numbers between 2 and 5000
        p=2
        while (l <= p < u):
            if (p in self.prime):    
                temp = self.prime.pop() #retreiving the value from set
                self.prime.add(temp)
                if (temp == p): #if the number is not discard then it is prime
                    for i in range(p * 2, u, p):
                        self.prime.discard(i) #discarding the multiples
            p += 1 #incrementing the index

X = SieveOfEratosthenes({2});
print(X.prime)
