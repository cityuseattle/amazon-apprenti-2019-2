def info(f, l, **kwagrs):
    print('First Name:', f)
    print('Last Name:', l)
    for key, value in kwagrs.items():
        print('Extra info:', key, ':', value)
    print()

info('Dan', 'Smyers', favorite_song='10000 hours')
info('Shay', 'Mooney')
info('Justin', 'Bieber', number=2063456789, address='99 Fifth Ave')
