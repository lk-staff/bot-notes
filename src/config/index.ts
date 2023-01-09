import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  BOT_TOKEN: <string>process.env.BOT_TOKEN,
  spreadsheet: {
    type: "service_account",
    project_id: "test-telegram-bot-359708",
    private_key_id: "dace17658cc3d60e8f01894face0f28fb0566629",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJVsDMmqagf21n\nEnheKah9EcyGxcuafSxfq8KOl7NarEO3HGvQR1FJMEV/W8Duxws7kiGvCfxVhcDT\nZX+jzIzWn0qkAOZIj67WUQL6tJUHvDIrS2DZ9TnvMh05qeE7Q0MqdX/Ib2J1Qxjq\ns1nti8rVNQnrYan/ngTZNEbEL5fFCNopklL//r02MIGyKQwIS/wCs7fGT/z3ScGO\nV2gzFGDVM83pXv8D6QZ074VNwo1lpH44Y37OsXBJOEjrByk51oQlaY2rOYHXkomt\nFZ6dvjIoi5Jr2ifh+ZwzLkJvwj6EuqLPBNBvfBlLYObY01TkbothJK/xxgFdjBFs\ns81y3GAHAgMBAAECggEAJlUniOzqy4TnUefw1dCtnP5OB9zRulyZna9ob9iPE7TX\ngZ3eIv3pCnuvx6My9OMdjt5wHlDS439/KmBZMFjp+ZTDU70+GtOMUI6E+DF4bEwW\n6ypDSswHFzTd3pQq5ysTtxo+1WzrfHLlZA34kaL7X6Nk+5URFjNCLg5naMO87AzA\nXPOaRK/bByFSV7k8pW7YZY1oneBjFtU5+AQYChIlFT3NTrMorGOu4+upQEHpHEWV\nIt2LLtUJUTAToaWTDaSMok0hcsJXC25f2eByqdNqywlFSvsxWXkejWAGlROTQnAG\n1NQT0Q71qNYixy2We9JyXJo/gOrPhK8rpHCPyRpcsQKBgQDt+1oIa9Zmu9MEEU9A\nMPysNlzbdKNdq3dihXG0qdwHZYbNX4tY8qnru20lK4aJ3kGJKqQvUZQQ9h6J6GDc\nV+7LKDP0jcPT5J4AsIumh656ItcTgdTUXffR/GE/lI0h92NG10ERkTTrlpMBJlQF\nyPKRgWWpx7RjPUalNEXzb50yMQKBgQDYlSyvOpafRbjKqIB/vYKLxXMZRNyFDO5P\nIRCfIOiDy7eT3DPykFIwjXK3s5/U1B2sZ4FT7uWqc/iLDpDTQ42rCmgVzHkzwUEu\nOYT2Tkvxn+DTetHACVt/6YBuvhH4KkJVies6OTlTPGUFyiATjG5w/oozePsSJj98\nlJZD7Y6vtwKBgGwutt7dJrnM6EARHlWv7yzaCZw5iYorSDohL29RSBSUspLpvA7T\nQStIKHWdM6u4vVH9cGWSUBzlxTwrxtxjnMn9nKCvUTYh1zG5D8LEKyyaaesUOgvQ\nK7fpYsvkW8P1EcxCTfIOcGAoMuty4P9AOgSrLevgPMBgOp0fBi2Dr5IBAoGAI1dE\nMVu4FElGPBt+zFlaIgCYJXltGnDfuh3FHpI6HrdxPzlhaKVQJAgQvhUbcZkjNmy1\nV8LVyxidZ+N6kl6lkVFjZps089MHFcng/mgMUGMsRpX2AAYG3jp18JwnRn1u0ZJt\nxdRsnD5wpZ8z2LzDkMCYQInvPijrlyKP2om7DMUCgYEAzkftx/bmAsOJXXnDltGu\nS/ut965sxRjYiGZfXdNMjNJo7tO69CwCz2tDaY6w9CRFq1aTeAyYMsqtuY6HwLLr\nVV7T4LffSH80DToPXfzLUFZ52Rqv6d/3MYWL62YJstxTyWo3A+0Ib8t7y4WuHhis\nFlribvyXbnY8xWVWaU4ila4=\n-----END PRIVATE KEY-----\n",
    client_email:
      "test-service@test-telegram-bot-359708.iam.gserviceaccount.com",
    client_id: "102627333113319644123",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/test-service%40test-telegram-bot-359708.iam.gserviceaccount.com",
  },
};
