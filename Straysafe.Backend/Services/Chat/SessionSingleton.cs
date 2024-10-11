namespace Straysafe.Backend.Services.Chat
{
    public class SessionSingleton
    {
        public Dictionary<Guid, Dictionary<string, int>> ChatSessionUpdatedKV = [];
        public Dictionary<Guid, List<string>> LockedConnectionIdViaSession = [];
    }
}
